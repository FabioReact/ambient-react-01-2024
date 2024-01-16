import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { registerUser } from '../api/users'
import { useNavigate } from 'react-router-dom'

type Inputs = {
  email: string
  password: string
  passwordConfirmation: string
}

const schema = z.object({
  email: z.string().email().min(8, 'Email trop court - 8 caractères minimum'),
  password: z.string().min(8, 'Password trop court - 8 caractères minimum'),
  passwordConfirmation: z.string().min(8, 'Password trop court - 8 caractères minimum'),
}).refine(values => values.password === values.passwordConfirmation, {
  path: ['passwordConfirmation'],
  message: 'les mots de passe doivent être identiques',
})

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  })

  const navigate = useNavigate()

  const onSubmitHandler = async (data: Inputs) => {
    await registerUser(data.email, data.password)
    navigate('/profile')
  }

  return (
    <section>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <fieldset>
          <label htmlFor='email'>Email:</label>
          <input type='email' id='email' {...register('email')} />
          {errors.email && <p className='text-amber-700'>{errors.email.message}</p>}
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password:</label>
          <input type='text' id='password' {...register('password')} />
          {errors.password && <p className='text-amber-700'>{errors.password.message}</p>}
        </fieldset>
        <fieldset>
          <label htmlFor='passwordConfirmation'>Confirm Password:</label>
          <input type='text' id='passwordConfirmation' {...register('passwordConfirmation')} />
          {errors.passwordConfirmation && <p className='text-amber-700'>{errors.passwordConfirmation.message}</p>}
        </fieldset>
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Register

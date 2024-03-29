import { useForm } from 'react-hook-form'
import { loginUser } from '../api/users'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/auth-context'
import { useState } from 'react'

type Inputs = {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const { login } = useAuthContext()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const onSubmitHandler = async (formData: Inputs) => {
    const response = await loginUser(formData.email, formData.password)
    console.log(response)
    if (response.status !== 200) {
      return setError('Invalid Password')
    }
    const data = await response.json()
    login(data.accessToken)
    navigate('/profile')
  }

  return (
    <section>
      <h1>Login</h1>
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
        {error && <p className='text-red-600'>{error}</p> }
        <button type='submit'>Submit</button>
      </form>
    </section>
  )
}

export default Login

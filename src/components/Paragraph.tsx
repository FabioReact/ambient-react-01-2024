import myClassnames from '../App.module.css' // import css global

const Paragraph = ({ children }: { children?: React.ReactNode }) => {
  return <p className={myClassnames.red}>{children}</p>
}

export default Paragraph

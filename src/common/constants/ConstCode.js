import Env from '@/common/constants/Env.json'
const MAIN_THEME_COLOR = {
  FIRST:Env.FIRST_MAIN_THEME_COLOR,
  SECOND:Env.SECOND_MAIN_THEME_COLOR
}
const REFRESH_TOKEN_NAME = Env.REFRESH_TOKEN_NAME


const Constant = () =>{
  return {
    MAIN_THEME_COLOR,
    REFRESH_TOKEN_NAME
  }
}
export default Constant()

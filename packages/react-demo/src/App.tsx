import MyForm from "./components/MyForm"
import { SimpleForm } from "react-components";

function App() {
  return (
    <>
      <span>项目内组件</span>
      <MyForm />
      <span>react组件包内组件</span>
      <SimpleForm />
    </>
  )
}

export default App

import { connect } from "react-redux";
import { getItems } from "../Redux/actions/fetchdata.action";
import { wrapper } from "../Redux/store";
import LoginForm from "../components/share/LoginForm.component";
// import {TextInput} from './../components/Form/TextInput'

function LogIn(props) {
  return (
    <>
      <LoginForm />
      {/* <div className='flex h-screen items-center justify-center'>
   <div className='w-3/5'><TextInput placeholder='Input Text Here...'/></div> </div > */}
      {/* {props.foo.map((item, i) => {
        return <p key={i}>{item.title}</p>;
      })}
    */}
      <style jsx>{``}</style>
    </>
  );
}
// export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
//   await store.dispatch(getItems());
//   // store.dispatch(addCount());
// });
export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    await store.dispatch(getItems());
  }
);
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect((state) => state.reducer, mapDispatchToProps)(LogIn);

import MainPageHeader from "../components/MainPageHeader.vue";

export default {
  component: MainPageHeader,
  title: "Components/MainPageHeader",
};

export const Primary = () => ({
  components: { MainPageHeader },
  template:
    '<MainPageHeader v-bind="args" :msg="msg" />',
});

Primary.args = {
    msg: "75 Day Hard Tracking App",
    handleResetChallenge: () => console.log("challenge reset"),
    handleLogin: () => console.log("Login"),
}

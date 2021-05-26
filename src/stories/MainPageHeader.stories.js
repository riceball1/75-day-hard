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
    handleResetChallenge: () => console.log("challenge reset"),
    handleLogin: () => console.log("Login"),
}

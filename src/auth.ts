import Amplify, { Auth } from "aws-amplify";
// ゆーざぷーるID クライアントIDでcognitoにつなぎに行ける
Amplify.configure({
  Auth: {
    region: "us-west-1",
    userPoolId: "us-west-1_vQ9QtJtqZ",
    userPoolWebClientId: "smc87jubid76d5n27i4ucguo1",
    storage: window.sessionStorage, // タブを閉じた時に認証情報をLocalStorageに持たせるかSessionStorageに持たせるか
  },
});
export async function signUp(
  username: string,
  password: string,
  email: string
) {
  try {
    await Auth.signUp({
      username: username,
      password: password,
      attributes: { email: email },
    });
  } catch (error) {
    throw error;
  }
}
export async function confirmSignUp(username: string, code: string) {
  try {
    await Auth.confirmSignUp(username, code);
  } catch (error) {
    throw error;
  }
}
export async function signIn(username: string, password: string) {
  try {
    await Auth.signIn({
      username: username,
      password: password,
    });
  } catch (error) {
    throw error;
  }
}
export async function signOut() {
  try {
    await Auth.signOut();
  } catch (error) {
    throw error;
  }
}
export async function changePassword(oldPassword: string, newPassword: string) {
  const user = await Auth.currentAuthenticatedUser();
  try {
    await Auth.changePassword(user, oldPassword, newPassword);
  } catch (error) {
    throw error;
  }
}
export async function forgetPassword(username: string) {
  try {
    await Auth.forgotPassword(username);
  } catch (error) {
    throw error;
  }
}
export async function forgetPasswordsubmit(
  username: string,
  code: string,
  password: string
) {
  try {
    await Auth.forgotPasswordSubmit(username, code, password);
  } catch (error) {
    throw error;
  }
}
export async function changeEmail(email: string) {
  const user = await Auth.currentAuthenticatedUser();
  try {
    await Auth.updateUserAttributes(user, { email: email });
  } catch (error) {
    throw error;
  }
}
export async function changeUsername(username: string) {
  const user = await Auth.currentAuthenticatedUser();
  try {
    await Auth.updateUserAttributes(user, { preferred_username: username });
  } catch (error) {
    throw error;
  }
}
export async function changeEmailSubmit(code: string) {
  try {
    await Auth.verifyCurrentUserAttributeSubmit("email", code);
  } catch (error) {
    throw error;
  }
}
export async function getCredentials() {
  return await (await Auth.currentSession()).getIdToken().payload.sub;
}
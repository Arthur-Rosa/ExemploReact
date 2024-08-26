export interface LoginFormProps {
  onUsernameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onLogin: (event: React.FormEvent<HTMLFormElement>) => void;
}

import { default as MuiButton, ButtonProps as DefaultProps } from '@mui/material/Button';

interface ButtonProps extends DefaultProps { }

export function Button({ ...props }: ButtonProps) {
    return <MuiButton {...props}>{props.children}</MuiButton>
}
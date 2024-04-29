import styles from "./mainbutton.module.scss";

export default function MainButton({ onClick, disabled, children, type = 'button', ariaLabel, ...props }) {
	return (
		<button
			onClick={onClick}
			className={styles.btn}
			disabled={disabled}
			type={type}
			aria-label={ariaLabel}
			{...props}
		>
			{children}
		</button>
	);
}
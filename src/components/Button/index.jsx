
import ButtonUI from '@mui/material/Button';
export default function Button({ children, ...rest }) {
    return (
        <ButtonUI
            style={{
                borderRadius: "28px",
                backgroundColor: "#41B7BF",
                padding: "10px 15px",
                fontSize: "16px"
            }}
            variant="contained"
            {...rest }
        >
            {children}
        </ButtonUI>
    )
}
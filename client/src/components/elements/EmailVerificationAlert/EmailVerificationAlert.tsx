import { Snackbar } from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

interface EmailVerificationAlertProps {
  showEmailVerificationMessage: boolean
  setShowEmailVerificationMessage: (verificationStatus: boolean) => void
}

export const EmailVerificationAlert: React.FC<EmailVerificationAlertProps> = ({
  showEmailVerificationMessage,
  setShowEmailVerificationMessage,
}) => {
  return (
    <Snackbar
      open={showEmailVerificationMessage}
      onClose={() => setShowEmailVerificationMessage(false)}
      autoHideDuration={6000}
    >
      <Alert severity="success">
        <AlertTitle>Your account has been created!</AlertTitle>
        <strong>Please verify your email!</strong>
      </Alert>
    </Snackbar>
  )
}

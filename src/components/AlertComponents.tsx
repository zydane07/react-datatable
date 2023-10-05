import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

interface AlertComponentProps {
  showAlert: boolean;
}

const AlertComponents: React.FC<AlertComponentProps> = ({ showAlert }) => {
  if (!showAlert) {
    return null; // Don't render anything if showAlert is false
  }

  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components and dependencies to your app using the cli.
        </AlertDescription>
      </Alert>
    </>
  );
};

export default AlertComponents;

import React from "react";
import { EnvVariablesErrorMessage } from "@/lib/helpers/env";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";

interface ErrorMessagesProps {
  envErrors: EnvVariablesErrorMessage[];
}

/**
 * ErrorMessages should be used for unrecoverable errors that break the application.
 *
 * @todo Consider overriding a custom error instead (https://nextjs.org/docs/pages/building-your-application/routing/custom-error)
 * @component
 * @param {EnvVariablesErrorMessage[]} props.envErrors - An array of error messages to display
 */
const ErrorMessages: React.FC<ErrorMessagesProps> = ({ envErrors }) => {
  return (
    <List>
      <ListSubheader>Environment Variables Errors</ListSubheader>
      {envErrors.map((error, index) => (
        <ListItem key={index} className="bg-red-100 rounded-md">
          <ListItemText primary={error.message} />
        </ListItem>
      ))}
    </List>
  );
};

export default ErrorMessages;

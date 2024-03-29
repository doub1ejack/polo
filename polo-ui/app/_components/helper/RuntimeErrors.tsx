import React from "react";
import { PoloErrorMessage } from "@/lib/helpers/env";
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material";

interface ErrorMessagesProps {
  errors: PoloErrorMessage[];
}

/**
 * ErrorMessages should be used for unrecoverable errors that break the application.
 *
 * @todo Consider overriding a custom error instead (https://nextjs.org/docs/pages/building-your-application/routing/custom-error)
 * @component
 * @param {PoloErrorMessage[]} props.errors - An array of error messages to display
 */
const RuntimeErrorMessages: React.FC<ErrorMessagesProps> = ({ errors }) => {
  return (
    <List>
      <ListSubheader>Oooo, that's going to be a problem...</ListSubheader>
      {errors.map((error, index) => (
        <ListItem key={index} className="bg-red-100 rounded-md">
          <ListItemText primary={error.message} />
        </ListItem>
      ))}
    </List>
  );
};

export default RuntimeErrorMessages;

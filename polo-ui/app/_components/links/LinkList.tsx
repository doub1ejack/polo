import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import moment from "moment";
import { PoloLink } from "@/lib/features/links/linksApiSlice";
import Link from "next/link";

interface LinkListProps {
  linkList: PoloLink[];
}

export const LinkList = ({ linkList }: LinkListProps) => {
  return (
    <div className="max-w-xl">
      <div className="flow-root mb-2 mt-4 text-gray-400 text-sm">
        <span className="float-left  pl-5">Active For</span>
        <span className="float-right ">Clicks</span>
        <div className="text-center">Shortened Url</div>
      </div>
      <List
        className="pt-0
        "
      >
        {linkList.map((link) => (
          <Link href={`/links/${link.id}`} key={link.id}>
            <ListItem
              key={link.id}
              className="polo-border bg-white hover:shadow-md hover:cursor-pointer m-3"
            >
              <ListItemText
                className="w-20 text-gray-400"
                primary={moment(link.created_at).fromNow(true)}
              />
              <div className="text-xl w-80">
                <span className="text-gray-500">{link.domainName}</span>
                <span className=" ">/{link.slug}</span>
              </div>

              <div className="w-2 text-gray-400 text-right pr-4">
                {link.clicks}
              </div>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
};

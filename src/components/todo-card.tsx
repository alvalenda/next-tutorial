import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { FC } from "react";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";

interface PageProps {
  id: number;
  title: string;
  description?: string;
  content?: string;
  footer: string;
}

const TodoCard: FC<PageProps> = (props) => {
  const { title, description, content, footer, id } = props;

  return (
    <Card className="flex flex-col justify-between align-bottom">
      <CardHeader>
        <CardTitle>{title ? title : "Card Title"}</CardTitle>
        <CardDescription>
          {description ? description : "Card Description"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content ? content : "Card Content"}</p>
      </CardContent>
      <CardContent>
        <p>{footer === "true" ? "Completa" : "Incompleta"}</p>
      </CardContent>
      <CardFooter className="flex justify-around align-bottom">
        <Link
          href={`/dashboard/${id}`}
          className={buttonVariants({ variant: "outline" })}
          style={{
            height: "1.5rem",
            placeSelf: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          <Icons.link className="absolute hover:cursor-pointer" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FC } from "react";

interface PageProps {
  title: string;
  description?: string;
  content?: string;
  footer: string;
}

const TodoCard: FC<PageProps> = (props) => {
  const { title, description, content, footer } = props;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title ? title : "Card Title"}</CardTitle>
        <CardDescription>
          {description ? description : "Card Description"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content ? content : "Card Content"}</p>
      </CardContent>
      <CardFooter>
        <p>{footer === "true" ? "Completa" : "Incompleta"}</p>
      </CardFooter>
    </Card>
  );
};

export default TodoCard;

// ProcessItem.tsx
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {v4 as uuid} from "uuid";

interface ProcessItemProps {
  title: string;
  content: string;
}

const ProcessItem: React.FC<ProcessItemProps> = ({ title, content }) => (
  <div className="flex" key ={uuid()}>
    <div className="w-12 mr-4 text-green-600 text-3xl">
      <CheckCircleIcon />
    </div>
    <div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-lg pt-2 pb-4">{content}</p>
    </div>
  </div>
);

export default ProcessItem;
import { FaApple } from "react-icons/fa6";


export default function Header() {

    return(
        
      <div className="flex gap-4 p-2">
        <FaApple />
        <p>Finder</p>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Window</p>
        <p>Help</p>
      </div>
    );
}
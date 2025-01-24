import { TextAnimate } from "@/components/ui/text-animate";
import { TypingAnimation } from "@/components/ui/typing-animation";


export default function Safari() {
  return (
    <div className="w-full h-full bg-white p-6 backdrop-filter backdrop-blur-sm">
       <img 
  className="w-full h-1/4 object-cover overflow-hidden" 
  src="https://images.pexels.com/photos/1131458/pexels-photo-1131458.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
  alt="Profile picture" 
/>

      <div className="flex  gap-4 items-center shadow-md p-4">
        <img
          src="https://avatars.githubusercontent.com/u/91244347?v=4"
          alt="Safari"
          className="h-36 rounded-full"
        />
        <div>
          <h1 className="text-black text-4xl font-bold">
            ¡Hi I'm Adrian Auqui!
          </h1>
          <TextAnimate className="text-black text-xl" animation="blurInUp" by="character">
            Software Developer
          </TextAnimate>
        </div>
      </div>
      <TypingAnimation className="text-black">Typing Animation</TypingAnimation>;

      <div className="flex  gap-4 shadow-md p-4 flex-col">
        <h1 className="text-black text-2xl ">Description</h1>
        <p className="text-black">
          I am a software developer with experience in web development, I have
          knowledge in technologies such as React, Node, Express, MongoDB, among
          others. I am passionate about technology and I am always looking to
          learn new things. as
        </p>

        
      </div>

      

      
    </div>
  );
}

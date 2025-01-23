export default function Safari() {

    return(
        <div className="w-full h-full bg-white p-6 backdrop-filter backdrop-blur-sm">

            <div className="flex  gap-4 items-center shadow-md p-4">
            <img src="https://avatars.githubusercontent.com/u/91244347?v=4" alt="Safari" className="h-36 rounded-full" />
            <div >
                <h1 className="text-black text-3xl font-bold">Adrian Antonio Auqui Perez</h1>
                <h2 className="text-black">Software Developer</h2>
            </div>

            </div>


            <div className="flex  gap-4 shadow-md p-4 flex-col">
            <h1 className="text-black text-2xl " >Description</h1>
            <p className="text-black">I am a software developer with experience in web development, I have knowledge in technologies such as React, Node, Express, MongoDB, among others. I am passionate about technology and I am always looking to learn new things.</p>

            </div>
        </div>
    );
}
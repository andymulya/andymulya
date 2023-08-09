import Title from '../components/Title'
import iconJs from '../assets/javascript.png'
import iconDart from '../assets/dart.png'
import iconFlutter from '../assets/flutter.png'
import iconVite from '../assets/viteJs.png'
import Card from '../components/Card'

export default function Knowledge(){
    return (
        <div>
            <div className="my-10 mx-5 flex flex-col gap-10">
                <Title title={"Knowledge"}/>
                <div className="flex gap-5 flex-col my-10 md:gap-20">
                    <h1 className="text-2xl lg:text-3xl font-extrabold uppercase text-cyan-800 border-l-4 border-slate-400 pl-2 whitespace-nowrap"><span className="text-3xl md:text-5xl text-cyan-950">What</span> I Know ?</h1>
                    <div className="flex flex-col lg:flex-row flex-wrap items-center gap-5 justify-center">
                        <Card title={"Javascript Programming"} icon={ iconJs } id={"my_modal_js"} func={ ()=>window.my_modal_js.showModal() } items={["Fundamental Javascript and OOP in Javascript", "Integrated with API in Javascript", "Callback, promise, async await and error handling"]} />
                        <Card title={"Dart Programming"} icon={ iconDart } id={"my_modal_dart"} func={ ()=>window.my_modal_dart.showModal() } items={["Fundamental Dart and OOP in Dart", "Integrated with API in Dart", "Callback, promise, async await and error handling"]} />
                        <Card title={"Vite Framework"} icon={ iconVite } id={"my_modal_vite"} func={ ()=>window.my_modal_vite.showModal() } items={["Fundamental ReactJS", "Make project with Vite", "Simple component", "Stateless component & Stateful component", "Dynamic component with props", "Lifecycle component", "Integrated with API", "React Router", "React-Hook", "Redux", "Make simple Personal Portfolio Website - Front End", "Make simple Movie Search, integrated with API"]} />
                        <Card title={"Flutter"} icon={ iconFlutter } id={"my_modal_flutter"} func={ ()=>window.my_modal_flutter.showModal() } items={["Fundamental Flutter", "Stateless & Stateful", "Visible & Invisible Widget", "Animated", "Transition", "Responsive & Adaptive", "State Management", "HTTP Request", "Widget Lifecycle", "Application Lifecycle", "Local Storage", "Make simple Mobile App - Al Qur'an", "Make simple Mobile App - Chasier Bluetooth Printer"]} />
                    </div>
                </div>
            </div>
        </div>
    )
}
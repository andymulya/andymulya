import CustomCard from '../components/CustomCard'
import Title from '../components/Title'

export default function Portfolio(){
    return (
        <div className="p-10">
            <Title title={"Portfolio"}/>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-10 justify-center">
                <CustomCard title={"Simple Mobile App Al-Qur'an and Integrated With Rest API"} tag={"Flutter | Dart | API"} color={"bg-gradient-to-l from-cyan-600 to-cyan-300"} shadowColor={"shadow-cyan-600"} label={"Flutter"}/>
                <CustomCard title={"Simple Mobile App Cashier Bluethoot Thermal Printer"} tag={"Flutter | Dart"} color={"bg-gradient-to-l from-cyan-600 to-cyan-300"} shadowColor={"shadow-cyan-600"} label={"Flutter"}/>
                <CustomCard title={"Simple Web Personal Profile Native Without Responsive - Front End"} tag={"Html | CSS | Javascript"} color={"bg-gradient-to-l from-amber-600 to-amber-400"} shadowColor={"shadow-amber-600"} label={"Javascript"}/>
                <CustomCard title={"Simple Web Bookshelf Native Without Responsive - Front End"} tag={"Html | CSS | Javascript"} color={"bg-gradient-to-l from-amber-600 to-amber-400"} shadowColor={"shadow-amber-600"} label={"Javascript"}/>
                <CustomCard title={"Simple Restful API Bookshelf With @Hapi - Back End"} tag={"Html | CSS | Javascript | NodeJS | @Hapi"} color={"bg-gradient-to-l from-amber-600 to-amber-400"} shadowColor={"shadow-amber-600"} label={"Javascript"}/>
                <CustomCard title={"Simple Web Personal Profile ReactJS Responsive - Front End"} tag={"ReactJS | Javascript | Vite | Tailwind"} color={"bg-gradient-to-l from-cyan-800 to-cyan-500"} shadowColor={"shadow-cyan-800"} label={"ReactJS"}/>
            </div>
        </div>
    )
}
import Portfolio from './Portfolio.jsx'
import Contact from './Contact.jsx'
import Items from './Items.jsx'

// Pong gif source: https://henrikostergaard.com/home

export default function Home() {
    return (
        <div className="h-[100vh] overflow-y-scroll bg-gradient-to-br from-bg1 via-bg2 to-bg3">
            <div className="relative flex flex-col md:flex-row">
                <div className="mx-4 w-[100vw] md:mx-20 md:w-[50vw] ">
                    <p className="mb-1 ml-1 mt-20 text-xl font-normal text-primary md:text-4xl">
                        Hey,
                    </p>
                    <h1 className="text-8xl text-primary">I'm Michael</h1>
                    <p className="ml-1 mt-8 text-3xl text-primary">
                        Welcome to my portfolio
                    </p>
                </div>
                <Items
                    rotation={[0, -Math.PI / 8, 0]}
                    position={[-1, 2, 6]}
                    scale={[2, 2, 2]}
                />
            </div>
            <Intro />
            <Portfolio />
            <Contact
                rotation={[Math.PI * 0.42, 0, 0]}
                position={[0, -1.5, 0]}
                scale={[0.6, 0.6, 0.6]}
            />
        </div>
    )
}

function Intro() {
    return (
        <div className="items-top mx-5 mb-10 flex h-[100vh] w-[100vw] flex-col gap-x-5 md:mx-20 md:h-[60vh] md:flex-row">
            <div className="relative mb-10 w-[90vw] md:mb-0 md:w-[40vw]">
                <div className="flex items-center gap-x-5">
                    <img
                        src="./images/me.jpg"
                        alt=""
                        className="h-40 w-40 rounded-full"
                    />
                    <h1 className="mb-2 text-5xl font-semibold leading-10 text-primary">
                        About Me
                    </h1>
                </div>
                <p className="mt-5 text-lg leading-6 text-primary">
                    Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla bla
                    bla Bla bla bla bla Bla bla bla bla Bla bla bla bla Bla bla
                    bla bla
                </p>
            </div>
            <ol className="relative ml-0 border-l border-gray-200 md:ml-20 w-[90vw] md:w-[50vw]">
                <TimeSlot
                    date="2022"
                    title="QA Automation Engineer | Shoebox Ltd."
                    image="./images/jobs/shoebox.png"
                    description="Worked with JS, WDIO, and Jest to develop automated test suites"
                />
                <TimeSlot
                    date="2021"
                    title="Busser | Zaks Diner"
                    image="./images/jobs/zaks.png"
                    description="Welcomed customers and cleaned tables"
                />
                <TimeSlot
                    date="2019"
                    title="Lifeguard | H20"
                    image="./images/jobs/h20.png"
                    description="Enforced pool rules, ensured a safe environment"
                />
            </ol>
        </div>
    )
}

function TimeSlot(props) {
    return (
        <li className="my-8 ml-4">
            <div className="absolute -left-2 mt-1.5 h-4 w-4 rounded-full border bg-gradient-to-r from-creations1 to-creations2 to-60%" />
            <time className="text-sm font-normal leading-none text-tertiary ">
                {props.date}
            </time>
            <div className="my-1 flex gap-x-3">
                <h3 className="text-lg font-semibold text-primary ">
                    {props.title}
                </h3>
                <img
                    src={props.image}
                    alt=""
                    className="-mt-1 h-8 w-8 rounded-full"
                />
            </div>
            <p className="text-base font-normal text-primary">
                {props.description}
            </p>
        </li>
    )
}

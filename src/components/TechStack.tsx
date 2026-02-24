'use client'

import { motion } from 'framer-motion'
import TechCard from './TechCard'
import ReactIcon from './icons/ReactIcon'
import NodeJSIcon from './icons/NodeJSIcon'
import TypeScriptIcon from './icons/TypeScriptIcon'
import NextjsIcon from './icons/NextjsIcon'
import LaravelIcon from './icons/LaravelIcon'
import TailwindIcon from './icons/TailwindIcon'
import GitIcon from './icons/GitIcon'
import DockerIcon from './icons/DockerIcon'
import AWSIcon from './icons/AWSIcon'
import PWAIcon from './icons/PWAIcon'
import SassIcon from './icons/SassIcon'
import BootstrapIcon from './icons/BootstrapIcon'
import ReduxIcon from './icons/ReduxIcon'
import MySQLIcon from './icons/MySQLIcon'
import PostgreSQLIcon from './icons/PostgreSQLIcon'
import HapiJSIcon from './icons/HapiJSIcon'
import ExpressIcon from './icons/ExpressIcon'
import RabbitMQIcon from './icons/RabbitMQIcon'
import RedisIcon from './icons/RedisIcon'
import DotNetIcon from './icons/DotNetIcon'
import OracleIcon from './icons/OracleIcon'
import JestIcon from './icons/JestIcon'
import CypressIcon from './icons/CypressIcon'
import CICDIcon from './icons/CICDIcon'

const TechStack = () => {
    const categories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "ReactJS", icon: ReactIcon },
                { name: "TypeScript", icon: TypeScriptIcon },
                { name: "Next.js", icon: NextjsIcon },
                { name: "PWA", icon: PWAIcon },
                { name: "Laravel", icon: LaravelIcon },
                { name: "SaaS/SCSS", icon: SassIcon },
                { name: "Tailwind CSS", icon: TailwindIcon },
                { name: "Bootstrap", icon: BootstrapIcon },
                { name: "Redux", icon: ReduxIcon },
            ]
        },
        {
            title: "Backend Development",
            skills: [
                { name: "MySQL", icon: MySQLIcon },
                { name: "PostgreSQL", icon: PostgreSQLIcon },
                { name: "HapiJS", icon: HapiJSIcon },
                { name: "ExpressJS", icon: ExpressIcon },
                { name: "NodeJS", icon: NodeJSIcon },
                { name: "RabbitMQ", icon: RabbitMQIcon },
                { name: "Redis", icon: RedisIcon },
                { name: ".NET Core", icon: DotNetIcon },
                { name: "Oracle DB", icon: OracleIcon },
            ]
        },
        {
            title: "Others",
            skills: [
                { name: "React Native", icon: ReactIcon },
                { name: "Jest", icon: JestIcon },
                { name: "Cypress", icon: CypressIcon },
                { name: "CI/CD", icon: CICDIcon },
                { name: "Git", icon: GitIcon },
                { name: "Docker", icon: DockerIcon },
                { name: "AWS", icon: AWSIcon },
            ]
        }
    ]

  return (
    <section className="min-h-screen py-20 px-4 relative z-10 bg-void-black overflow-hidden flex flex-col items-center justify-center">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-bio-green/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-6xl relative z-10">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-bold text-white mb-20 font-mono text-center tracking-tighter"
            >
                <span className="text-bio-green">04.</span> TECH_ARSENAL
            </motion.h2>

            <div className="space-y-16">
                {categories.map((category, catIndex) => (
                    <div key={catIndex}>
                         <motion.h3 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="text-2xl font-bold text-white mb-8 border-l-4 border-bio-green pl-4"
                        >
                            {category.title}
                        </motion.h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                            {category.skills.map((skill, index) => (
                                <TechCard 
                                    key={index}
                                    icon={skill.icon}
                                    name={skill.name}
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default TechStack

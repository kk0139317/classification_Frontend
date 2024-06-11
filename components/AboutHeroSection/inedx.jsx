import React from 'react'
import Link from 'next/link'
const AboutHeroSection = () => {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
		<h1 className="text-4xl font-bold leading-none sm:text-5xl">Out Motive is to Develop
			<span className="dark:text-violet-600">ML Intergration with </span>Web
		</h1>
		<p className="px-8 mt-8 mb-12 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, quasi.!</p>
		<div className="flex flex-wrap justify-center">
            <Link href='classify' >
			<button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Get started</button>
            </Link>
            <Link href='details'>
			<button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-900 dark:border-gray-300">Learn more</button>
            </Link>
		</div>
	</div>
</section>
  )
}

export default AboutHeroSection
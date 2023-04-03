export default function Home() {

  const features = [
    { name: 'Interface', description: `Intuitive and easy-to-use user interface so servers can quickly register orders and update their status.` },
    { name: 'Real time', description: 'Real-time communication functionality between waiters and kitchen, allowing instant updates on order status.' },
    { name: 'Management', description: 'Inventory management system to ensure the necessary ingredients are always available to prepare orders.' },
    { name: 'Data analysis', description: 'generate valuable insights into restaurant performance, such as average order preparation time and number of orders per hour, to help improve service efficiency and increase customer satisfaction.' }
  ]

  return (
    <main className="prose prose-invert prose-headings:text-zinc-100 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-xl prose-h2:font-medium prose-p:text-zinc-400 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-2xl prose-a:text-cyan-400">
      <h1 id="presentation">Presentation</h1>
      <p>We would like to present our proposal for an application that aims to improve the experience of customers in restaurants, offering agility in the service of waiters and allowing customers to follow the status of the preparation of their orders in real time.
      </p>
      <h2 id="project-description">Project Description</h2>
      <p>Our application has an intuitive and easy-to-use interface, allowing waiters to receive orders from customers quickly and conveniently, without the need for paper and pen, reducing errors and optimizing time. Customers, in turn, can follow the preparation status of their orders in real time, avoiding the anxiety and uncertainty that often occur during the process.
      </p>
      <h2 id="other-notes">Other Notes</h2>
      <p>Our application also allows you to customize the menu, adapting it to the needs and peculiarities of each establishment. In addition, all information is stored in a secure database, allowing access to reports and analyzes that can be used for future improvements.
      </p>
      <p>We believe that this solution can add value to your customers and bring a more positive experience to your establishment's patrons, increasing satisfaction and loyalty.
      </p>
      <p>We remain at your disposal for further information and clarifications about our application.</p>

      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-400 sm:text-2xl">Technical Specifications</h1>
        <p className="mt-4 text-gray-500">
          The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
          steel divider separates active cards from new ones, or can be used to archive important task lists.
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-white">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-400">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      
    </main>
  )
}
import React from 'react'

function Card({username,txtn ="yadav"}) {
    return (
        <>
        {username}ipsum dolor, sit amet consectetur adipisicing elit. Quia delectus, animi fugiat nulla numquam ipsum qui molestiae. Earum similique delectus laudantium rem atque, architecto provident! Deserunt corporis quidem non eveniet!
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea distinctio praesentium nemo iusto quisquam facilis delectus obcaecati accusantium vitae officia, facere eos dolor laboriosam consequuntur eius quia quam a? Facere!
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="https://tse1.mm.bing.net/th?id=OIP.-15_9rp1nRdFBCqLgpdtTgHaEK&pid=Api&rs=1&c=1&qlt=95&w=171&h=96"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {txtn}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {username}
      </div>
    </figcaption>
  </div>
</figure>
        </>
    )
}

export default Card


export default function ComicsComponent() {
  const MENUS = [
    {
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/4/c0/65b7d795258f9/portrait_uncanny.jpg",
      title: "Ultimate Black Panther (2024) #1",
      description: "2024"
    },{
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/c0/65b7d77cd51b6/portrait_uncanny.jpg",
      title: "Wolverine: Madripoor Knights (2024) #1",
      description: "2024"
    },{
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/60/65b7d7b21328d/portrait_uncanny.jpg",
      title: "Daredevil: Gang War (2023) #3",
      description: "2024"
    },{
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/6/70/65b7d77c370b1/portrait_uncanny.jpg",
      title: "X-Men (2021) #31",
      description: "2024"
    },{
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/4/b0/65b7d79a57588/portrait_uncanny.jpg",
      title: "Star Wars: Mace Windu (2024) #1",
      description: "2024"
    }
    ,{
      image: "https://cdn.marvel.com/u/prod/marvel/i/mg/9/70/65b7d79a40e2b/portrait_uncanny.jpg",
      title: "Sensational She-Hulk (2023) #5",
      description: "2024"
    }
  ]
  return (
    <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full py-16 flex flex-col items-center space-y-4">
          <h1 className="font-bold text-3xl uppercase">latest comics</h1>
          <div className="flex space-x-4">
            {
              MENUS.map((item,index) => (
            <div key={index} className="flex flex-col w-40">
              <div><img src={item.image} alt="submenu_image"/></div>
              <div className="py-4">
                <h2 className="font-bold text-sm">{item.title}</h2>
                <p className="text-sm text-gray-500">{item.description}</p>
              </div>
            </div>
              ))
            }
          </div>
        </div>
    </div>

  )
}
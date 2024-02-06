
export default function CharactersComponent() {
  const MENUS = [
    {
      image: "https://cdn.marvel.com/content/1x/1078mob_ons_crd_01.jpg",
      title: "agent mobius",
      description: ""
    },{
      image: "https://cdn.marvel.com/content/1x/008cmv_ons_crd_05.jpg",
      title: "captain marvel",
      description: ""
    },{
      image: "https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg",
      title: "roki",
      description: ""
    },{
      image: "https://cdn.marvel.com/content/1x/038mmk_ons_crd_02.jpg",
      title: "ms.marvel",
      description: ""
    },{
      image: "https://cdn.marvel.com/content/1x/531esl_ons_crd_01.jpg",
      title: "sylvie laufeydottir",
      description: ""
    }
    ,{
      image: "https://cdn.marvel.com/content/1x/180mrb_ons_crd_02.jpg",
      title: "monica rambeau",
      description: ""
    }
  ]
  return (
    <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full py-16 flex flex-col items-center space-y-4">
          <h1 className="font-bold text-3xl uppercase">trending in the universe</h1>
          <div className="flex space-x-4">
            {
              MENUS.map((item,index) => (
            <div key={index} className="flex flex-col w-40 bg-black">
              <div><img src={item.image} alt="submenu_image"/></div>
              <div className="py-4">
                <h2 className="text-center uppercase text-white font-bold">{item.title}</h2>
              </div>
            </div>
              ))
            }
          </div>
        </div>
    </div>

  )
}
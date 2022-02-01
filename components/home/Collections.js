import SectionHeader from "../navigation/SectionHeader"
import CollectionTeaser from "../home/CollectionTeaser"

const collections = [
    {
        name: 'Động vật',
        color: "border-red-600",
        imgUrl: "https://ichef.bbci.co.uk/images/ic/1200x675/p049tgdb.jpg"
    },
    {
        name: 'Thực vật',
        color: "border-green-600",
        imgUrl: "https://watchandlearn.scholastic.com/content/dam/classroom-magazines/watchandlearn/videos/animals-and-plants/plants/what-are-plants-/What-Are-Plants.jpg"
    },
    {
        name: 'Cổ sinh',
        color: "border-stone-700",
        imgUrl: "https://i.pinimg.com/originals/9e/45/1f/9e451f03e03c17cc2e35833c6fb07682.jpg"
    },
    {
        name: 'Địa chất',
        color: "border-orange-500",
        imgUrl: "https://live.staticflickr.com/4821/45809375735_a8fab24fdc_b.jpg"
    },
    {
        name: 'Thổ nhưỡng',
        color: "border-yellow-900",
        imgUrl: "https://www.foodnavigator.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/news/market-trends/living-soils-initiative-nestle-mccain-and-lidl-address-soil-health-in-france/12039109-1-eng-GB/Living-Soils-initiative-Nestle-McCain-and-Lidl-address-soil-health-in-France.jpg"
    },
    
]

const Collections = () => {
  return (
      <div className="bg-black border-green-700">
          <div className="container mx-auto">
            <SectionHeader sectionTitle="Bộ sưu tập mẫu vật" linkTitle="Xem toàn bộ sưu tập mẫu vật" linkUrl="/bo-suu-tap"/>
            <div className="grid gap-10 grid-cols-5">
              {collections.map((c, index) => (
                <CollectionTeaser key={index} name={c.name} color={c.color} imgUrl={c.imgUrl}/>
              ))}
            </div>
          </div>
      </div>
  );
};

export default Collections;

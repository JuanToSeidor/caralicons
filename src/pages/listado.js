import React from 'react';
import CaralIcon from '../icons/menu';

function Listado({sicePrint, colorPrint}){
  
    const nombres = ['menu','dots','list','pause','x','arrowDownToLine','bluetooth',"bluetoothSlash", 
        'Bolt','BoltSlash','Camera','CameraSecurity','cameraSecurityRoof','CharBarScreen','CharScreen','ChartFile','chartSimple','Circles','ClickCheck','ClickCursor','ClickTab','Cloud','CloudFly','CloudSync','CloudUp','Code','command','comments', 'commentsServer', 'Cube','Dron','FileDown','FileZip', 'Gear', 'Image', 'Job',
        'Laptop', 'Magic','MapBranch','MensagePc', 'Mobile', 'MouseCalendar', 'Network' , 'PC', 'QR', 'Robot', 'Satellite','ShakePhone',
        'ShieldHalved', 'SliderHorizontal', 'SliderVertical', "SMS", 'SquareFace','Storage','SunBright','SunMoon','Tab','ToggleOff', 'ToggleOn','UpRightFromSquare','Video','Volume', 'Wifi','WifiLeft','Wrench','wrenchPrice', 'Database']
      const movilidad = ['Airplane','Anchor','Bus','Car','Dispenser','Flag','Globe','GlobeMap','Helicopter','LocationPin','Map','Moto','Motorcycle','OilWell','Plane','PlaneArrival','PlaneDeparture','Scraper','SignsPost','Skateboard','SkateboardElectric','Trailer','Train','Truck','TruckMedical']
      const financial =[ "CalendaEuro","CreditCard","Dolar","DolarReceipt","DolarScreen","DollarTower","Euro","lock","lockOpen","MoneyBill","MoneySlash","moneyBills","Percent","PercentCircle","PiggyBank","Receipt","Bank","Calculator" ]
      const Buildings = ["building","City","hospital","house","key","shop","store","window"]
      const People = ["Accessible","Assist","Dislike","DislikeFile","Female","Like","LikeFile","Male","PeopleDress","PersonCopy","Search","SearchPerson","Star","User","UserConfig","users","usersMap","usersWifi"]
      const Health = ["healtFile","Stethoscope","Virus","Wave","WaveScreen"]
      const Contact = ["CircleInfo","Envelope","EnvelopeOpen","EnvelopeSend","InfoFile","Message","MessagePhone","TriangleExclamation","XCircle"]
      const Nature = ["Leaf","LeafPlant","Seedling","SeedlingBottle","SeedlingPot","wheat"]
      const Bussiness =["ArrowPointer","Box","BusinessTime","CheckFile","CheckSearch","CubeInCube","DropBox","EditFile","EditScreen","File","FlagPointer","PresentationScreenBar","PresentationScreenChart","Print","RefreshPresentation","screenBar","screenChart"]
      const innovation = ["BadgeArrowUp","BadgeSync","Bars","Chats","CircleBars","CupeUpView","DateCheck","DownStairs","FileClick","FileShare","HistoryChart","LigthOn","Puzzle","PuzzleOut","Schedule","ScreenView","UpStairs"]
      const Recovery = ["LockSlash","LockSquare","LockSync","Sync"]
      const Sales = ["CartShopping","CartShoppingCircle","CartShoppingPin","CartShoppingPlus","CartShoppingSlash"]
      const Others = ["Barbell","BasketShopping","Bell","Book","Bookmark","Calendar","CalendarTime","Certificate","Check","CheckBox","CheckList","Clock","Coffee","Edit","eye","eyeSlash","Filter","ID","Learn","Megaphone","Mesagge","NewFile","Newspaper","noFound","Note","Pin","Portafolio","Price","Price1","Quote","Save","ScaleBalanced","Signature","Trash","zoomIn","ZoomOut", "ContinueExecution", "CancelExecution"]
      const Arrows = ["ArrowDown","ArrowLeft","ArrowRight","ArrowUp","ArrowUpArrowDown","ArrowsLeftRight","ArrowsLeftRightToLine","ArrowsMaximize","ArrowsMinimize","ArrowsMove","ArrowsUpDown","ChevronDown","ChevronDownBox","ChevronDownCircle","ChevronLeft","ChevronLeftBox","ChevronLeftCircle","ChevronRigth","ChevronRigthBox","ChevronRigthCircle","ChevronUp","ChevronUpBox","ChevronUpCircle","ChevronsDown","ChevronsLeft","ChevronsRigth","ChevronsUp"]
      const Brands = ["AzureSql","Redshift","Azure","CloudStorage","GoogleStorage","Oracle","Saleforce","snowflake","AWS","SAP"]
      const joins = ["FullJoin","FullJoinW","InnerJoin","LeftJoin","LeftJoinW","RigthJoin","RigthJoinW"]

      const IconSection = ({ title, items }) => {
        const handleIconClick = (nombre) => {
          const iconComponent = `<CaralIcon name="${nombre}"  size="${sicePrint}" color="${colorPrint}" />`;
          navigator.clipboard.writeText(iconComponent)
            .then(() => {
              alert(`Icono copiado: ${iconComponent}`);
            })
            .catch(err => {
              console.error('Error al copiar el icono: ', err);
            });
        };
      
        return (
          <>
            <h1>{title}</h1>
            <div className='flexicons'>
              {items.map((nombre) => (
                <div className='boxicon' key={nombre} onClick={() => handleIconClick(nombre)}>
                  <div style={{ textAlign: 'center' }}>
                    <div className='icon_box'>
                      <CaralIcon size={sicePrint} color={colorPrint} name={nombre} />
                    </div>
                    <span>{nombre}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      };

      return(
      <div className='container'> 
        <IconSection title="01 Technology & Media" items={nombres} />
        <IconSection title="02 Transportation Journey" items={movilidad} />
        <IconSection title="03 Financial Services" items={financial} />
        <IconSection title="04 Buildings & Real Estate" items={Buildings} />
        <IconSection title="05 People" items={People} />
        <IconSection title="06 Health" items={Health} />
        <IconSection title="07 Contact" items={Contact} />
        <IconSection title="08 Nature" items={Nature} />
        <IconSection title="09 Bussiness" items={Bussiness} />
        <IconSection title="10 innovation" items={innovation} />
        <IconSection title="11 Recovery" items={Recovery} />
        <IconSection title="12 sale" items={Sales} />
        <IconSection title="13 other" items={Others} />
        <IconSection title="14 arrows" items={Arrows} />
        <IconSection title="15 Brands" items={Brands} />
        <IconSection title="16 Joins" items={joins} />        
      </div>
      )
}

export default Listado;
import BroadRange from "./broadRange/broadRange";
import IronProduct from "./ironProduct/ironProduct";
import MetalInformation from "./metalInformation/MetalInformation";
import MetalsHomePage from "./MetalsHome/MetalsHome";
import PortfolioList from "./PortfolioList/PortfolioList";
import CardsMetalsPage from "./productMetals/productMetals";
import SellingProducts from "./sellingProducts/sellingProducts";
function MetalProductpage() {
  return (
    <>
    <MetalsHomePage/>
    <CardsMetalsPage/>
    <PortfolioList/>
    <BroadRange/>
    <IronProduct/>
    <SellingProducts/>
    <MetalInformation/>
    </>
  );
}
export default MetalProductpage;

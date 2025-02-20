import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import VerifiedIcon from '@mui/icons-material/Verified';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs  sm:text-sm md:text-bse text-gray-700">
 <div className="">
    <div className="w-12 m-auto mb-5 "><PublishedWithChangesIcon/></div>
    <p className="font-semibold">Easy Exchange Policy</p>
    <p className="text-gray-400">We offer hassle free exchange policy</p>
 </div>
 <div className="">
    <div className="w-12 m-auto mb-5 "><VerifiedIcon/></div>
    <p className="font-semibold">7 Days Return Policy</p>
    <p className="text-gray-400">We provide 7 days free return policy</p>
 </div>
 <div className="">
    <div className="w-12 m-auto mb-5 "><SupportAgentIcon/></div>
    <p className="font-semibold">Best customer support</p>
    <p className="text-gray-400">We provide 24/7 customer support</p>
 </div>
    </div>
  )
}

export default OurPolicy
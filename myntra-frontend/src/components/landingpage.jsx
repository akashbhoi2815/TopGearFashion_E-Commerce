import { Divider } from "@chakra-ui/react"
import React from "react"
import Footer from "./Footer"
import styles from './landingpage.module.css'
import Navbar from "./Navbar"


const Landing = () => {


return(

<>
{/* <div style={{"display":"flex"}}>
    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1452866756163211269/pu/img/MAlsIDjeGaMMCqBJ.jpg"></img> 
    <img src="https://pbs.twimg.com/ext_tw_video_thumb/1452909163437199370/pu/img/1Dh23eiS1mJUvmkW.jpg"></img> 
    <img src="https://i.ytimg.com/vi/TZ0MAtxXAjw/maxresdefault.jpg"></img> 
    <img   src="https://cdn.flipshope.com/blog/wp-content/uploads/2021/12/Myntra-End-Of-Reason-Sale-Dates-offers-and-More.jpeg"></img> 

</div> */}

<Navbar/>

<hr style={{border:"1px solid red",position:"sticky"}}/>
<br />

<div className={styles.deals}>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/a57192fa-18a8-452f-b6f7-878a25b5aa901668071775302-image_jpeg1977428923.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/f4a21ab7-141d-4ad0-9531-752d304904591667202206833-Thermals_starting_399-999-_from_Jockey-_Marks_-_Spencer_-_More.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/571167f5-a956-4e3d-85bd-b2bdc74bdcbb1667199617347-Bras_starting_-_149_-399-_-_Zivame-_M-S_and_more..jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/252a4e8a-a638-477c-aaf1-102b7fc6caf61667213139857-Bed_Linen_and_Furnishing_Min_60_-Story-home_-_Cortina-.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/6/dcad3b7e-53d4-40f6-9181-894d45acc0b21667713818009-unnamed--79-.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/e49b5bfb-6ca0-4f65-8d65-43a0319a3e0b1667201891583-Virat-s_Favourite_picks_Min_50_Off-_Wrogn.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/57ce2a16-c65c-416a-9767-03e572261a8f1667199618110-Tshirts_Starting_199_-499-_M-H-_Moda_-_More.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/10/b259354b-fdfc-4d11-bf9d-6bdc920cb9581668065467766-image_png1457111296.png"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/6/a22b5c42-7719-4cbf-83aa-7b58e330a3141667713508151-unnamed--67-.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/6/89745fe0-0ee6-4c0d-b3f7-c9bdfbaa3ae61667713530784-unnamed--68-.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/32b140b5-d901-4911-9a74-6625a9de8e3a1667199617622-JJ-_Highlander_Min_60.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/a20d9451-2939-46bb-af90-8795d329b73e1667199617510-Gant-_Nautica_Min_50.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_75,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/2f95848a-89d3-494c-be45-db50653698d81667199617393-Defacto-_Zalora_upto_60.jpg"></img>
</div>

<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/db79460f-8020-49e8-8528-189507bce7a21668143245506-Budget-Buys--2-.jpg"></img>
<div className={styles.budget}>
   
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/78b92187-7e50-4a56-9c09-3017476550d11667206671012-Ethnic-Wear.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/68c96860-5a3d-4a25-af22-3b279536669b1667207041117-Loungewear.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/ecb964f3-24dd-489c-b0f4-7ef64a3c20901667207189928-T-Shirts.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/6c0fa1d9-14aa-483d-8720-93924df13bd61667207041144-Sandals.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/74951ae7-57b9-4c48-aed6-7ca8a713dd101667206671024-Flip-Flops.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/184ca3ac-f533-4f11-a153-eb4b673bf6371667207041137-Nightwear.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/0ee81e91-1650-4200-8e14-037d0981f8d61667206790342-Kurta-Sets.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/401c1e97-f302-42e8-875b-c6566984d5ca1667206790349-Kurtas.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/f0b20c3d-c5ef-4f4d-8936-de5b307720971667206790315-Jeans.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/1dc66cec-d11a-4a88-aa02-a523599223a81667207041124-Loungewear-1.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/20736b51-6dd0-4d49-ae84-7bd72012dc1f1667206524809-Casual-Shoes.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/958d755d-c5ba-4a1a-9425-720203dc62b51667207041150-Sarees.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/d35e7ac0-09d4-4648-81e2-0612b9c385181667206524796-Bras-_-Briefs.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/83d10fcd-3447-4970-906a-c21d74ed24421667207041163-Shorts-_-Skirts.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/d1eb6c5b-6592-4b67-89cf-4ec5445893811667207189899-Tops-_-Tees.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/f4429388-8d94-40cd-bd00-4440b21875a81667207041184-Suits-_-Blazers.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/736bdc4d-f631-4b37-8c56-d772e4c52e381667207189916-Trousers.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/492de114-69be-4c8f-87b6-7248e87a62e51667206524802-Casual-Shirts.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/368edeaf-d1ac-4559-a9cf-8fe9343239861667206790322-Jeans-1.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/10/31/f4429388-8d94-40cd-bd00-4440b21875a81667207041184-Suits-_-Blazers.jpg"></img>
    </div>

    <img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/de3859bd-ed72-4d90-9a93-70dd191dd5a51668144694278-Brands-Everyone---s-Crushing-On-.jpg"></img>
<div className={styles.special}>
    
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/742a0b39-d086-49bc-adfe-8efcfdd433731667554110671-U.S._Polo_Assn..jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/11b5db8e-6dd8-406e-bb99-a1d63ab7fd7e1667554110504-Jack_-_Jones.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/d49da357-2ca6-479c-aa8c-cb75d495ff891667554110526-Levis_1.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/f07f15af-a4b6-4505-bd26-12ed0ef2ba101667554110759-Vero_Moda.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/233e1457-a97f-4c32-a5c7-9d848386cf761667554110601-ONLY.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/c4ababed-fbbf-4917-aa23-e73105b821901667554110475-Forever21.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/43baa99a-edc0-4bad-9b33-1669039728651667554110430-Biba.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/2fb3a1ea-ec88-457b-ba12-2a92cdb4c3d11667554110490-H-M.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/e870c983-6b98-456f-add3-d1e8f45de7211667554110609-Pantaloons.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_98,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/4/86ef2db1-8bcf-4974-9609-d7294dae8fab1667554110520-Levis.jpg"></img>
    
</div>

<img src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/49039744-a61e-4220-a40a-e791ce77844f1668142162387-Shop-By-Category--1-.jpg"></img>
<div className={styles.category}>

    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/f81ca97a-856f-4c3c-a569-cc8cb9b6ae071668140695820-1.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/12364565-beaa-42d5-a1fc-44f6ac2e9e301668140695830-2.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/13446cbd-ae74-4658-8d7c-237111b70be01668140695838-3.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/910a5540-27c4-4b6c-85fc-5e41fcfef2081668140695846-4.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/2581970d-bdb8-4f02-93d5-53e8a64d3ca71668140695926-13.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/e45dbf64-4f65-4aad-9571-8e069e8f5d161668140695939-14.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/a6fedcaf-53fc-4571-b388-434784c25b8f1668140695947-15.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/d4ed62e9-72c9-4e48-aa1a-e16ccaa9958b1668140695955-16.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/28b9ae4e-da8f-479b-9677-53845aa8f6551668140696049-25.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/2c59c82c-f3e2-44b1-a131-cbcb6988a6371668140696059-26.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/8e074153-b37c-46d2-80b4-d589c49531331668140696069-27.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/b8ddc98d-62e2-4d70-9a93-0254a7a0c5151668140696078-28.jpg"></img>

    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/6ecd8c3f-c97d-4d12-926e-521575abf7541668140695883-9.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/9f08c4e5-9f10-4a2a-8bab-2a350b01ce2e1668140695891-10.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/530eaaad-16c9-4507-85b4-0a35aec528751668140695901-11.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/f009eaf8-0f2f-4f6c-9a6d-26db4a6e72bb1668140695912-12.jpg"></img>
    
   
    
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/321522a2-5fe2-4273-a1a0-91d08ff941631668140696007-21.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/73e76008-3279-49c5-9e81-e19f987455821668140696017-22.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/30c5e16e-76fe-43cc-bb32-7624a256c5cb1668140696027-23.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/d0dc25fd-4dcb-4562-b1e4-5d3d3441edf81668140696038-24.jpg"></img>
    
    
   
    {/* <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/774d0597-de72-46a7-9105-bc675a40e4fc1668140695854-5.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/798d0d0f-c7b1-44b6-9d1f-0e190d9b235d1668140695860-6.jpg"></img>
    <img  src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/ed97c94a-fad8-4eae-b92a-1e5e27784aff1668140695868-7.jpg"></img>
    <img  src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/9f331748-f360-49c5-81f7-243641c3d2191668140695875-8.jpg"></img>
   
   
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/361a65e4-fa7f-474b-9b63-457aa6fb6cb11668140695967-17.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/8e0d833b-d474-4072-8bf3-a3fa169edeaf1668140695975-18.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/90cfed71-9efe-4eb7-90f3-5be2c6ffe2011668140695984-19.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/f936d5e1-19c9-423f-a0de-c2afd4aab0fd1668140695994-20.jpg"></img>
    
    
   
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/1422c73d-e721-4110-9601-4affbffd4dd81668140696087-29.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/204c8851-891d-403f-b661-21ca7aee618b1668140696098-30.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/53cf3f79-dfc5-4247-aeb9-65c875bf0ef21668140696122-32.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/07185e86-0f4a-45fd-b351-6bf7660fb3a81668140696134-33.jpg"></img> */}
    
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/4a8745cd-ebdc-4f24-9f27-ef0d3fb650b71668140696144-34.jpg"></img>
    <img src="https://assets.myntassets.com/f_webp,w_163,c_limit,fl_progressive,dpr_2.0/assets/images/2022/11/11/3ce5a1d6-856b-41ed-ac95-d197aa2415e11668140696157-35.jpg"></img>
 
</div>


<Footer/>
</>


)


}


export default Landing
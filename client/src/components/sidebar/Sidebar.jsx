import React from 'react';
import "./sidebar.css";
import {useEffect , useState} from "react"
import axios from "axios"
import {Link} from "react-router-dom"
import { axiosInstance } from '../../config';
const Sidebar = () => {
    const [cats, setcats] = useState([]);
    useEffect(() => {
        const getcats= async ()=>{
            const res = await axiosInstance.get("/categories")
            setcats(res.data);
        };
        getcats();
    },[]);
    return (
        <div className="sidebar">
           <div className="sidebaritem">
               <span className="sidebarTitle">ABOUT ME</span>
               <img className="sidebarimage" alt="" src ="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERIPERAQDxAXERkQFRYSERUQEBIQFREYFxcSFRsYHSgsGRolHRUWIzMtKCkuLjI6GB8zODMsNygvLisBCgoKDg0OGxAQGCsfHSYyKy0tLS01LSstListLTUrKy0vLS0tLS0rKy0tLS0tLS0rKy8tLSstLzU1LS03LSsxLv/AABEIAKkBKwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAEDBQYHAgj/xABKEAACAgECAgQGDQoEBgMAAAABAgADEQQSBSETMUFRBgciMoGxFBcjJFJhcXN0k7Kz0ggWMzRUcpGSocMVJWLhQlWDlKTBZHWE/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAEDAgUE/8QAKBEBAAECAwcFAQEAAAAAAAAAAAECEQMxUQQSEyEzgbEUQVJx8DJh/9oADAMBAAIRAxEAPwDXIiJm8EiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiWAiZDhHCrtVYKaE3vjceeFVR1sx7BzE2T2teIfC0v1r/gmnDjV1TRXVF6Yu0uJunta8Q+FpfrX/BHta8Q+FpfrX/BG5Grrg4vxlpcTdPa14h8LS/Wv+CPa14h8LS/Wv8AgjcjU4OL8ZaXE3T2teIfC0v1r/gj2teIfC0v1r/gjcjU4OL8ZaXE3T2teIfC0v1r/gmG4/4NarR7Teq7WOFdG3IWxnb1Ag/KI4cauasOumLzSwspLtvUvp9ctTOqLTZyRESBERAREQEREBERAREQEREBERAREQEREBERAREQEGIMsZjovie/Sas9uyr7Vk6bOY+J7z9X+5V9qybr4ScFOrrVF1eq0ZV9+7TWdGzeSRtflzXnnHxTWrN6mydKO/lmcxmcP8OKuLcLNZHFNTfRYSqsXYMrqM7GDE9nMEHsPV2+PAduK8UssQ8U1NNVaqzsHbeS5IVVAI+C3PPLHUZy+p3PMZmH8HOCnSVsh1Wq1hZ9+7U2dKy+SBtXlyXlnHxzLZhHrMZnO/CDwQ11VVt+k4vryyq1nR32lwwALFVYY2nuyD6Oucv0nhfxa566U12oL2OtaDfjLuwVeeOXMiFfSk1Hxp/qB+er9ZEj8D8C9TW9d2p4vr73Vg5RLWShiDnYwYncvZ2Z+KX/ABon/L2+er+1LTmxx+nV9S5DZ5q+n1y1Lj+avp9ctziv+njwRETkIiICIiAibFwRqb9QUOmpFYpsYAbw2a6SVLENzOVBOAO2Yi3Vo1e3oKkferB0DA7QrAocse0qeXdLY5okTNeEFVa16Q10pWbNMLnK7jucuykDJOB5OcDviyqv/D0t6FBcdU1BfysmtalfqzjOW68dkWGFiZvTJWNC13QVvauqWnc28+5tUzcwGAzleuY7XOCV9yWlgg3Bd21icsr4YnGVZf4RY5osREgREQEREBERAREQEREBKNKyjdUsZjoXifPl6v8Acq9dk6ZunMfFCfL1f7tXrsnSszWrN6mydKO/lzPx9v710n0o/cPIPiBf9f8A+h/ekjx/N700n0s/cPIP5PrZ9n/9D+9OX0uybo3S3EqLfEW9xt+af7BnzH4EP7/0H0uj71Z9McR/Q2/NP9gz5e8Bn9/8P+l0ferIsPq3dNS8aB/y9vna/tTaczU/GefeDfO1/anUZscfp1fUuSt5q+n1zxPbeavp9ck8O4bbfvFQUlENjBrETFa+c/lEchM683kQhxJOi0T3WCmva1hOFBdVDHuBYgGek4fYbvY42G3dsA6RNpfONobOM55dc5ESJf1Olauw1PtDhtrYdWVWBwQWBxyPXLmq4dZW4qfo1cgH9KhUBgCpJBwMgg8z2wIkTJXcDvSxqW6IWrnKdPVvGF3EY3czjngSzo+G22o9ibNleC5a1E2hjgEhiORPKFsyXgavu7MWRFFFq5d1QbmpZVXmeskzBFSOR5Ecj8skajRMgRiayrEhStiWLlcZBKk7cbh198ua/hdtJQWBFLqHXFiPlG81/JJwpg9mY49qLq6dEK72UDShGWq/zbekdiGCNyOCv8J41dlj8Nr6S3pHGsZ8PaHsFRpVQ2CchdwP8ZiNfw22jYbFAFidIjKyujp3qykg/wC475RuHuKhqPI6Mtsz0iFt+Adu3Oc4IPVKss1w9LBw+wV2BLDq0cKL1rsaoVMCcbgSMkfw+KYniVNnk23OGsc4xvWx9qIqh3IJxnkOfM4JljT6N3BYABFIDOxCVqT1As2Bn4uuXbOHOKzcDW9YIVilisVZs7Qy9Yzg88Y5QiHEyFPB7XNQXoi9gBRDdWth3HC+SxBGezvyJ4s4ZYq2MWpPR+eFurdxlwnmqST5TCQshRJFGjd1LjatYO0u7BE3YztBPnNjngZM96nh1iILSFaottD1sLE34ztJHmtjsODCIkSZTwy56nvRQ9deDZtdS6AnALLnIHI88Y5TxoNC9zbK9hbBOGda8gKWJG4jOACfRC2RolWGCRyPPHI5HoPbKQhERAREQEo/VKyj9UsZjfvFGfL1f7tXrsnSMzmnikPl6r92r12TpGZtVm9PZOlHfy5h+UAfeel+lH7l5qHii8GxrvZedXrdJ0fRfql3Q79/SefyOcbeXymbX+UEfeWl+lf2XmM/J1bnxH/8/wDfnL6m2+1on/NuNf8Aej8Ee1on/NuNf96PwTecxmEaDrPFui12N/ivGThGODrAQcKTg+R1TingO/8AmPD/AKZR96s+oeIn3G35p/sGfK/gK3+ZcP8AplP3qwsPrPM1Txmn3g3ztf2ptGZqnjMPvBvna/tSxmxx+nV9S5UfNX0+uZvwQx0mo3EhfYGo3bQC23oueASMn0zBjzV9Prk/g/FPY5sIqSwvU1B3FgBW4w2NpHMzOr+nk0+yf4MLp/Zmlw9+enTGakAzuGMkWHA9Ei6A+/6j/wDNQ/8AkCRuGa7oLlvFauUbeisTtDA5GcdeJa1Wo3WNaq9GS2/CknaxOcgn45CJsu8aBGp1APX7Itz9a0pxjPSHPX0VQ9I09YkvWcYS5jbbpqnuPNmDuqWMBjcyA9ZxzwQD3SA+oL2G2wdIWYswJ27ifk6h8kJMaNi8LEo9nastbYrgFlHRgKbRSu1d4fPX/p+KQ+ABfY3ENxZV6Grmqhj+srjkSPXIPG+JHU3Ne1a1u3NtpYqSABkAk45CeuHcUFVV1PRLYLQFcszA7VYMAuDy5jMLOc91jWrUFr6J2fKEvuUIQ/SMMbQxx5ITt5zJeFfnaX/6+j7JmEUjIyMjPV1ZHdMhxfinTmsmpK+jqWkbWYg1p5oO4nnz64SGUp19ZCaPUnGnempkfrbTXdEMWr/pPUw7ucg8V4fZp6+hsHMagkEc0dTUu10PapHbInEdatuwipatqLX5LM2VRcLncevAldRxOx6KtO53JUzGsnrVWAynycsjuzDq94synhEm3ScOVf0Zoew46jebPdCe8jyRMbVw640PqFKdCMK+LVzknKqy5znIyOXZKabibLX0Dqt1G7eEYkFH7WrZTlSe3rB7p7PEwKLNMlQVHdbGZnLvlM7QOoAcz2dsE2n9/j34MH37pPpFf2xIWuPutvzjfbMu8K13QWpdsWxkYOoYkKHByCcdcs6y8O7WBAm5ixUEkAk5OM9nOEZnwnrC08PVf0Z0QcdxudybT8ucf0lfBZ816+tv0Z0L2EHq6Wtl6Nvly39Zj6OKHohp7UW6kMXQMSr1M3nGth1A9oOR8Wec8Wa/3Nqa0FVbEF8Es9hXqDsewHngAD5YW/O6XwTiFmnrturxkXUgg80dCt+6tx2qRJ3+HpuXWaXPsd1tVl6301p09hNTf6fgntH9cLRrVWmyk1K29lYsWYMCgYLgDly3t8uZ64XxSyg2bD5NlbU2KfNdGUjn8Yzkf7mEvysgiIiRCIiAiIgJ5s6jPU82dRljMb34pfP1X7tXrsnRszm/imPl6r92r12Tb/CTgzautaxq9Vo8NuLaWzonYYI2scdXObTm9TZOlHfy57+ULrUGn0tG4dKbjbt/4hWKyu49wy39D3TH/k7ahQ+vrLAOy0uq58plQ2hiB2gb1/iJsD+JnQOxst1Ovtc8yzW1kse8k15P8YTxNcPVg9Wp19LjmGW2sEHvB6PI/jOX0ul5jMw3g3wZtJW1Z1eq1mW3BtVZ0rqMAbVOOrlmZfMqInG9StemvtdgqLS7EnkANhnyt4I6tatfo7XYKiaqp2JOAqC1SWPxAZM7rxHxXVajPsniXFNQu7dte9WUH4gUIHoEiN4leF4x0utB7+lrz93IrpYbIyDkHmCOYI7xNW8Zf6g3ztf2pB4H4u00j1tTxHiYrRw/RG9ehcA5KMoUAqeo8pM8ZR94t87X9qdQxx+nV9S5aPNX0+uUlV81fT65SZV5vIjIiInIREQEzPANPU6ao2VLY1ema9CXsXDKyrghWGR5Xy/HMNNg8FtOzV64gE50b1j/AFWF0IQd5wDylhUXXaKv2JVq0BqLXNQ6biyEqgYWV7ueOeCCTzleJaRNKUqatbb+jWyzeXCVlxuFShSMkKRkknr5Yxzx+r1Vj4V2JCjaq4Cog7QqgALz68CZ3wkX2W41tA6QvWourXyrKbkUKcqOewhQQerr6oXlMIlmgrt0r6ulejep1S6vcWTa/JLULEkc+RBJ75RNEE0iaoUreDa9dhYvsp27dikIwI3ZY5PcAMdtyuz2PpNRS/K7UNWuzPlV1VMXLuP+EkkAA8+s90rwg6vTmu/TZsSxcOoAapsMQ1NwPIdvM45NkQckAaigNawo3KwxWju+K8sCSSrAsQAQOfbzkzWpSmn0lw09Ra0WlwXv2+53bBt905cpD44KfZF3QY6DpG2Y5rtz2fF3fFiZLjWksXRaDcpG0Xhu9C+o3KG7sg8swa/vdhdY6NY7Vp0dZYlVyTtXsGT1yzESOSIiAiIgIiICIiAiIgJ5t6jPUo4yMSxmNi8AOO1aW6wXErXYqjfgkKykkZx2Hcf6Tof506D9ro/nnFuiPfHRHvm29S2wtorw6d2Idp/OnQftdH88fnToP2uj+ecW6I98dEe+S9OrT1lekO0/nToP2uj+ePzp0H7XR/POLdEe+OiPfF6dT1lekO0/nToP2uj+ePzp0H7XR/POLdEe+OiPfF6dT1lekO0/nToP2uj+ean4wfCbT3UjTUOLiXDsy52Kq5wM9pJx1dxmhdEe+OiPfG9S5r2quumabLqeavp9cQvUB3f+4mdU3l88ERE5CIiAl2kLhtyhsDIznr9BlqVBhSXXCrgbQzYySc4HxCWiYZs84FwqCuQNpB5gdWD2iUBXkAgJ7c5yTn5eU8BusSobHVAraoDEDqzPVgXapCgE5yRnsPyy1KkwKREQhERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA/9k="/>
               <p className="sidebarpara">The history of political blogging might usefully be divided into the periods pre- and post-Huffington. Before the millionaire socialite Arianna Huffington decided to get in on the act, bloggers operated in a spirit of underdog solidarity.</p>
           </div>
           <div className="sidebaritem">
               <span className="sidebarTitle">CATEGORIES</span>
               <ul className="sidebarlist">
                   {cats.map((c)=>(
                    <Link style={{textDecoration:"none", color: "inherit"}} to={`/?cat=${c.name}`}> 
                         <li className="sidebarlistitem">{c.name}</li>
                    </Link>
                   
                   )
                   )}
                   
               </ul>
           </div>
           <div className="sidebaritem">
               <span className="sidebarTitle">FOLLOW US</span>
               <div className="sidebarsocial">
               <i className="sidebaricon fab fa-facebook-square"></i>
                <i className="sidebaricon fab fa-twitter-square"></i>
                <i className="sidebaricon fab fa-pinterest-square"></i>
                <i className="sidebaricon fab fa-instagram-square"></i>
               </div>
           </div>
        </div>
    );
}

export default Sidebar;

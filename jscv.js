
const fetchCv = 'cv.json'
const cvCard = document.querySelector(".cv_card");

async function getCv(){
    const cv = await fetch(fetchCv)

    if (cv.ok){
        const workCv = await cv.json();

        for (let i = 0; i < workCv.length; i++){
            const workText = document.createElement('div');
            workText.setAttribute("id","workCard")
            workText.innerHTML = workCv[i].company;
            cvCard.appendChild(workText);

            const posText = document.createElement('p');
            posText.innerHTML = workCv[i].position;
            workText.appendChild(posText);

            const startdText = document.createElement('li');
            startdText.innerHTML = workCv[i].startDate;
            workText.appendChild(startdText);

            const endDText = document.createElement('li');
            endDText.innerHTML = workCv[i].endDate;
            workText.appendChild(endDText);
            
            const moreInfo = document.createElement('button')
            moreInfo.setAttribute("value",[i]);
            moreInfo.setAttribute("class", "modal");
            moreInfo.setAttribute("type" , "button");
            moreInfo.setAttribute("onclick" , `modalUp(${[i]})`);
            moreInfo.innerText = ("More Info");
            workText.appendChild(moreInfo);
        }
    }
    else{
        console.log("Error" + Response.status);
    };

}

async function modalUp(value){
    const cv = await fetch(fetchCv)
    if (cv.ok){
        const workCv = await cv.json();

        for (let i = 0; i < workCv.length; i++){
            if(value == i){
                const infoText = document.createElement('div');
                infoText.setAttribute("id","infoText")
                infoText.setAttribute("class","modal-container");
                infoText.setAttribute("value",[value]);
                infoText.setAttribute("onclick" , `modalDown(${[value]})`);
                cvCard.appendChild(infoText);

                const infoModalCompany = infoText.appendChild(document.createElement('p'));
                infoModalCompany.setAttribute("id", "modalInfo");
                infoModalCompany.setAttribute("class", "modalInfo");
                infoModalCompany.setAttribute("value",[value]);
                infoModalCompany.setAttribute("onclick" , `modalDown(${[value]})`);
                infoModalCompany.innerHTML= workCv[value].company;
                const infoModal = infoModalCompany.appendChild(document.createElement('p'));
                infoModal.innerHTML= workCv[value].summary;

                infoText.classList.add('show');
                //console.log(workCv[i]);
        }
    
        }
    }
}
 async function modalDown(value){
    const cv = await fetch(fetchCv)
    if (cv.ok){
        const workCv = await cv.json();
        for (let i = 0; i < workCv.length; i++){
            if(value == i && cvCard.lastChild.classList == "modal-container show"){
                cvCard.removeChild(cvCard.lastChild);
            }
        }
    }
}

getCv();


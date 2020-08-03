let b=document.getElementById('btn');
function call(){
    document.getElementById('demo').innerText="";
    display();
}


async function display(){
    let response=await fetch('https://api.covid19api.com/summary');
    let data=await response.json();
   // console.log(data);
    let nation=document.getElementById('txt').value;
    document.getElementById('txt').value='';

    const t_data=document.querySelector('#demo');
    let status='unfound'
    for(let i=0;i<186;i++){
        if(data.Countries[i].Country.toLowerCase()==nation.toLowerCase()){
           
            status='found';

            let total_case=data.Countries[i].TotalConfirmed;
            let total_death=data.Countries[i].TotalDeaths;
            let total_recover=data.Countries[i].TotalRecovered;
             
            //creates row for table
            let tr=document.createElement('tr');

            let th_1=document.createTextNode('Country');//creates textnode to store Country
            let th_11=document.createElement('th');//cretaes heading for the row in the table
            th_11.appendChild(th_1); //appends the text of textnode to the heading(th)
            tr.appendChild(th_11);//appends th to the row of the table
            t_data.appendChild(tr);//appends the row to the table and vice versa

            let th_2=document.createTextNode('Total Confirmed');
            let th_12=document.createElement('th');
            th_12.appendChild(th_2);
            tr.appendChild(th_12);
            t_data.appendChild(tr);

            let th_3=document.createTextNode('Total Deaths');
            let th_13=document.createElement('th');
            th_13.appendChild(th_3);
            tr.appendChild(th_13);
            t_data.appendChild(tr);

            let th_4=document.createTextNode('Total Recovered');
            let th_14=document.createElement('th');
            th_14.appendChild(th_4);
            tr.appendChild(th_14);
            t_data.appendChild(tr);

            let t1=document.createTextNode(data.Countries[i].Country);
            let t1_data=document.createElement('td');
            t1_data.appendChild(t1);
            t_data.appendChild(t1_data);

            let t2=document.createTextNode(total_case);
            let t2_data=document.createElement('td');
            t2_data.appendChild(t2);
            t_data.appendChild(t2_data);
            
            let t3=document.createTextNode(total_death);
            let t3_data=document.createElement('td');
            t3_data.appendChild(t3);
            t_data.appendChild(t3_data);

            let t4=document.createTextNode(total_recover);
            let t4_data=document.createElement('td');
            t4_data.appendChild(t4);
            t_data.appendChild(t4_data);

            break;
        }
    }

    if(status!='found'){
        alert('Not found');
    }
}

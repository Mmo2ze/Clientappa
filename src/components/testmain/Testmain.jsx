import "./testmain.css"

function Testmain() {

const data = [1,2,3,4,5]


    const numberList = data.map((number) => (
        <span key={number} style={{ marginRight: '10px' }}>
          {number}
        </span>
      ));
        return (
            <div className="testing">  


            <div>{numberList} </div>

            </div>
        )
        
  
}

export default Testmain




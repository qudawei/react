/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-10 15:11:03
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-10 15:14:25
 */
export  const TodoListUi = (props)=>{
    let {inputValue,inputValueChange, list, onClickBtn} = props;
        return(
            <div>
                <input value={inputValue} onChange={inputValueChange}></input>
                <button onClick={() => onClickBtn(inputValue)}>提交</button>
                <ul>
                    {
                        list.map((item, index) =>{
                            return <li key={index}>{item}</li>
                        })
                    }
                </ul>
            </div>
        )
}
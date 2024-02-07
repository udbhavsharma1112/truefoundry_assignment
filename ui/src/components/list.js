function List(props) {
    const {log} = props;
    return (
        <tr>
            <td>{log["username"]}</td>
            <td>{log["createdAt"]}</td>
            <td>{log["request"].substring(0, 20)}</td>
            <td>{log["response"]}</td>
            <td>{log["timeTaken"]}</td>
            <td>{log["inputToken"]}</td>
            <td>{log["outputToken"]}</td>
            
        </tr>
    )
    
}
export default List;
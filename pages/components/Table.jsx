const Table = () => {
    const recentFiles = [
      { name: 'File 1', date: '2023-10-31' },
      { name: 'File 2', date: '2023-10-30' },
    ];
  
    return (
      <table className="w-full mt-4">
        <thead>
          <tr>
            <th className="text-left">File Name</th>
            <th className="text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {recentFiles.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{file.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;
  
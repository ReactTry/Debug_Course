import { Search } from "./components/Search/Search";
import { SearchApi } from "./components/Search/SearchApi";
import { SearchApiUseEffect } from "./components/Search/SearchApiUseEffect";
import { SearchDebounce } from "./components/Search/SearchDebounce";

function App() {
  return (
    <><table>
<tr>
<td>  <Search /></td><td>  <SearchApi /></td>

</tr>
<tr>
<td> <SearchApiUseEffect /></td><td> <SearchDebounce /></td>

</tr>

    </table>
    
    </>
  );
}

export default App;

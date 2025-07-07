import ReactDOM from 'react-dom/client'
import './assets/css/styles.css';
import { CounterApp } from './components/01-useState/CounterApp';
import { CounterAppWithCustomHook } from './components/01-useState/CounterAppWithCustomHook';
import { SimpleForm } from './components/02-useEffect/SimpleForm';
import { SimpleFormWithCustomHook } from './components/02-useEffect/SimpleFormWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
        <CounterApp />
        <CounterAppWithCustomHook />
        <SimpleForm />
        <SimpleFormWithCustomHook />
        <MultipleCustomHooks />
    </>
)

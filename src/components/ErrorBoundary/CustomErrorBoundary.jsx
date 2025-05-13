import { ErrorBoundary } from "react-error-boundary";

function CustomErrorBoundaryUI({error, resetErrorBoundary}) {
  return (
    <div className="h-[100vh] flex justify-center item-center px-6 ">
          <div role="alert" className="alert alert-error shadow-lg">
        <p>Something went wrong</p>
        <pre>{error?.message}</pre>
        <button onClick={resetErrorBoundary}>Try Again</button>

    </div>
    </div>
  
  );
}
export default function CustomErrorBoundary({children}){
    return(
        <ErrorBoundary
        FallbackComponent={CustomErrorBoundaryUI}
        onReset={() => {

            window.location.reload();
            // Reset the state of your app so the error doesn't happen again
        }}
        >
            {children}
        </ErrorBoundary>
    )
}

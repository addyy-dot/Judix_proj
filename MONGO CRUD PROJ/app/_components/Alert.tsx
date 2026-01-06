'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useAlertService } from '../_services';

export { Alert };

function Alert() {
  const pathname = usePathname();
  const alertService = useAlertService();   
  const alert = alertService.alert;

  useEffect(() => {
    alertService.clear();
  }, [pathname]);

  if (!alert) return null;

  return (
    <div className="d-flex justify-content-center mt-3">
      <div className={`alert alert-dismissible fade show shadow ${alert.type}`} style={{ maxWidth: '500px' }} role="alert">
        <div className="d-flex align-items-center">
          {alert.type === 'alert-success' ? <span className="me-2 fs-5">✅</span> : <span className="me-2 fs-5">❌</span>}
          <span className="flex-grow-1">{alert.message}</span>
          <button
            type="button"
            className="btn-close ms-2"
            onClick={alertService.clear}
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
  );
}

import React, { createContext, useState, useEffect, useMemo } from 'react';
import { Session } from '@supabase/supabase-js';
import supabase from '../utils/initSupabase';

type ContextProps = {
  user: null | boolean;
  session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
  children: React.ReactNode;
}

function AuthProvider(props: Props) {
  const { children } = props;
  const [user, setUser] = useState<null | boolean>(null);
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const userSession = supabase.auth.session();
    setSession(userSession);
    setUser(!!userSession);
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, _session) => {
        console.log(`Supabase auth event: ${event}`);
        setSession(_session);
        setUser(!!_session);
      }
    );
    return () => {
      authListener!.unsubscribe();
    };
  }, [user]);

  const authContextValue = useMemo(
    () => ({
      user,
      session,
    }),
    [user, session]
  );

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };

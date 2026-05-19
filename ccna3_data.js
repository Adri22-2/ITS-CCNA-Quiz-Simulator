window.ccnaDatabase = window.ccnaDatabase || {};
window.ccnaDatabase.ccna3 = [
    
    {
        question: "All'interno di un gruppo FHRP (First Hop Redundancy Protocol), quale ruolo assume il router che ha il compito attivo di inoltrare i pacchetti inviati all'indirizzo IP del gateway virtuale?",
        options: [
            "Standby Router",
            "Active Router",
            "Backup Router",
            "Virtual Master"
        ],
        correct: 1,
        rationale: "Il router 'Active' intercetta fisicamente il traffico indirizzato al MAC/IP virtuale del gateway. Se questo router si guasta, il router di 'Standby' subentra per garantire la continuità del servizio."
    },
    {
        question: "Quale protocollo proprietario Cisco permette a più router in un segmento LAN di cooperare per presentarsi come un singolo gateway predefinito virtuale, supportando la ridondanza?",
        options: [
            "VRRP",
            "HSRP (Hot Standby Router Protocol)",
            "GLBP",
            "OSPF"
        ],
        correct: 1,
        rationale: "HSRP è il protocollo proprietario di Cisco progettato per fornire ridondanza del primo hop (FHRP), monitorando lo stato delle interfacce e gestendo IP e MAC virtuali condivisi."
    },
    {
        question: "Qual è il valore di priorità predefinito (Default Priority) assegnato a un'interfaccia router che partecipa a un gruppo HSRP?",
        options: [
            "1",
            "50",
            "100",
            "255"
        ],
        correct: 2,
        rationale: "La priorità predefinita di HSRP è 100. Se due router hanno la stessa priorità, l'elezione del router Active viene decisa in base all'indirizzo IP configurato più alto."
    },
    {
        question: "Se un amministratore desidera che un router HSRP con priorità più alta riprenda immediatamente il ruolo di Active non appena torna in funzione dopo un guasto, quale comando deve inserire?",
        options: [
            "standby 1 preempt",
            "standby 1 active-resume",
            "standby 1 priority force",
            "standby 1 override"
        ],
        correct: 0,
        rationale: "Il comando 'preempt' abilita la preazione. Senza questo comando, anche se un router offline torna attivo con una priorità superiore, non spodesterà l'attuale router Active fino a un nuovo riavvio di quest'ultimo."
    },
    {
        question: "Quale stato HSRP indica che il router ha appreso l'indirizzo IP virtuale, ma non è ancora né il router attivo né quello di standby, pur continuando ad ascoltare i messaggi di hello?",
        options: [
            "Initial",
            "Listen",
            "Speak",
            "Learn"
        ],
        correct: 1,
        rationale: "Nello stato 'Listen', il router conosce l'IP virtuale ma non partecipa attivamente alle votazioni; ascolta solo i messaggi periodici degli altri membri del gruppo."
    },
    {
        question: "Quale protocollo standard (non proprietario) offre funzionalità FHRP simili a HSRP, permettendo l'interoperabilità tra apparati di vendor differenti?",
        options: [
            "GLBP",
            "VRRP (Virtual Router Redundancy Protocol)",
            "IRDP",
            "HSRPv2"
        ],
        correct: 1,
        rationale: "VRRP è uno standard aperto definito dalla RFC 5798 che permette di creare gruppi di gateway ridondanti unendo router di produttori diversi (es. Cisco, MikroTik, Juniper)."
    },
    {
        question: "Quale vantaggio strutturale offre il protocollo GLBP (Gateway Load Balancing Protocol) rispetto a HSRP e VRRP?",
        options: [
            "Consente il bilanciamento dinamico del carico (Load Balancing) tra più router attivi contemporaneamente utilizzando lo stesso IP virtuale ma MAC virtuali differenti.",
            "Consente di crittografare tutto il traffico dati degli utenti aziendali.",
            "Elimina la necessità di configurare tabelle di routing.",
            "Funziona esclusivamente su connessioni wireless a corto raggio."
        ],
        correct: 0,
        rationale: "Mentre HSRP e VRRP mantengono un solo router attivo per l'inoltro dei dati (lasciando l'altro in attesa), GLBP distribuisce il traffico smistando le risposte ARP con MAC diversi, sfruttando attivamente tutti i router del gruppo."
    },
    {
        question: "Quale tipo di attacco informatico consiste nell'inviare una quantità enorme di richieste di connessione (come i pacchetti SYN) a un server con l'obiettivo di esaurire le sue risorse hardware e renderlo non raggiungibile?",
        options: [
            "Man-in-the-Middle (MitM)",
            "DoS / DDoS (Denial of Service)",
            "Spoofing",
            "Spyware"
        ],
        correct: 1,
        rationale: "Gli attacchi DoS/DDoS mirano a interrompere la disponibilità di un servizio o di un server sovraccaricandolo di traffico o richieste fino al crash del sistema."
    },
    {
        question: "Come viene definito un malware che si nasconde all'interno di un software apparentemente legittimo e utile, per poi eseguire azioni dannose o aprire backdoor una volta installato dall'utente?",
        options: [
            "Verme (Worm)",
            "Cavallo di Troia (Trojan Horse)",
            "Ransomware",
            "Adware"
        ],
        correct: 1,
        rationale: "Un Trojan non si replica autonomamente come un worm, ma inganna l'utente inducendolo a eseguirlo volontariamente mascherandosi da programma sicuro."
    },
    {
        question: "Quale caratteristica distingue un 'Worm' informatico da un comune 'Virus'?",
        options: [
            "Il Worm colpisce solo i server Linux.",
            "Il Worm è in grado di replicarsi e propagarsi autonomamente attraverso la rete sfruttando le vulnerabilità del sistema, senza richiedere l'intervento dell'utente o un file ospite.",
            "Il Worm non danneggia mai i file locali.",
            "Il Worm si attiva solo inserendo una chiavetta USB."
        ],
        correct: 1,
        rationale: "A differenza dei virus, che richiedono l'esecuzione di un programma infetto da parte dell'uomo, i worm sfruttano le falle di rete per infettare altri computer in modo del tutto automatico."
    },
    {
        question: "Quale tipologia di attacco si verifica quando un attore malevolo si posiziona logicamente tra due dispositivi legittimi per intercettare, leggere o alterare i dati riservati in transito a loro insaputa?",
        options: [
            "Brute Force Attack",
            "Man-in-the-Middle (MitM)",
            "Buffer Overflow",
            "Phishing"
        ],
        correct: 1,
        rationale: "Negli attacchi MitM (come l'ARP Spoofing), l'attaccante devia i flussi di comunicazione verso il proprio dispositivo, agendo da intermediario invisibile tra le vittime."
    },
    {
        question: "In che cosa consiste la tecnica ingegneristica nota come 'Phishing'?",
        options: [
            "Nell'installazione di una sonda hardware su uno switch aziendale.",
            "Nell'invio di comunicazioni fraudolente (email o messaggi) che imitano organizzazioni affidabili per spingere gli utenti a rivelare credenziali o dati bancari.",
            "Nel bloccare le porte di un firewall tramite script automatici.",
            "Nel clonare i segnali wireless delle schede di rete."
        ],
        correct: 1,
        rationale: "Il phishing fa leva sull'ingegneria sociale: manipola psicologicamente le persone inducendole a compiere azioni compromettenti (es. cliccare su link malevoli o inserire password in siti clone)."
    },
    {
        question: "Quale strumento o funzionalità software permette di centralizzare la raccolta, l'analisi e la correlazione dei messaggi di log e degli eventi di sicurezza generati da tutti gli apparati di una rete aziendale?",
        options: [
            "Server DHCPv6",
            "SIEM (Security Information and Event Management)",
            "WLC Centralized Architecture",
            "TFTP Repository"
        ],
        correct: 1,
        rationale: "I sistemi SIEM aggregano i log da firewall, switch, server e router, analizzandoli in tempo reale per identificare pattern insoliti o attacchi informatici coordinati."
    },
    {
        question: "All'interno del framework AAA (Authentication, Authorization, Accounting), quale fase stabilisce esattamente a quali risorse o comandi un utente autenticato può accedere e cosa può fare?",
        options: [
            "Authentication",
            "Authorization",
            "Accounting",
            "Auditing"
        ],
        correct: 1,
        rationale: "L'autorizzazione (Authorization) definisce i privilegi dell'utente. L'autenticazione accerta chi sia l'utente, mentre l'accounting traccia le azioni compiute e i comandi digitati."
    },
    {
        question: "Quale protocollo standard aperto viene comunemente impiegato nei sistemi aziendali per gestire i servizi AAA, combinando autenticazione e autorizzazione in un unico processo e cifrando solo la password?",
        options: [
            "TACACS+",
            "RADIUS (Remote Authentication Dial-In User Service)",
            "SSH",
            "Kerberos"
        ],
        correct: 1,
        rationale: "RADIUS è un protocollo standard aperto (UDP) molto usato per l'accesso alla rete 802.1X. Cifra solo il campo password. Al contrario, il protocollo Cisco TACACS+ separa le funzioni e cifra l'intero pacchetto."
    },
    {
        question: "Quale tipo di VPN (Virtual Private Network) connette in modo permanente interi segmenti di rete locali appartenenti a uffici geograficamente distanti sfruttando un tunnel sicuro su Internet, senza richiedere software client sui PC degli utenti?",
        options: [
            "Remote Access VPN",
            "Site-to-Site VPN",
            "SSL Clientless VPN",
            "Dial-up VPN"
        ],
        correct: 1,
        rationale: "Le VPN Site-to-Site collegano sedi remote (es. una filiale alla sede centrale). Il tunnel viene stabilito direttamente tra i router o i firewall di confine, rendendo il processo trasparente agli host interni."
    },
    {
        question: "Quale suite di protocolli di sicurezza standard opera al livello Network (Layer 3) del modello OSI per garantire riservatezza, integrità e autenticazione dei dati all'interno di un tunnel VPN?",
        options: [
            "TLS / SSL",
            "IPsec (Internet Protocol Security)",
            "HTTPS",
            "SSH"
        ],
        correct: 1,
        rationale: "IPsec protegge l'intero traffico di rete a livello di Layer 3, cifrando e autenticando ogni pacchetto IP indipendente dal tipo di applicazione o protocollo superiore utilizzato."
    },
    {
        question: "All'interno del framework IPsec, quale protocollo si occupa di garantire l'integrità dei dati e l'autenticazione dell'origine del pacchetto, ma NON fornisce alcuna crittografia (riservatezza) per i dati?",
        options: [
            "ESP (Encapsulating Security Payload)",
            "AH (Authentication Header)",
            "IKE (Internet Key Exchange)",
            "Diffie-Hellman"
        ],
        correct: 1,
        rationale: "L'Authentication Header (AH) firma i pacchetti per prevenire alterazioni o spoofing, ma lascia il payload in chiaro. Per criptare i dati è necessario usare il protocollo ESP."
    },
    {
        question: "Quale algoritmo viene impiegato durante la fase di stabilimento di un tunnel VPN IPsec per consentire a due peer remoti di scambiarsi in modo sicuro una chiave simmetrica segreta su un canale pubblico non protetto?",
        options: [
            "AES",
            "Diffie-Hellman (DH)",
            "RSA",
            "MD5"
        ],
        correct: 1,
        rationale: "Diffie-Hellman non è un algoritmo di crittografia dei dati, ma un meccanismo matematico di scambio chiavi fondamentale per generare le chiavi simmetriche segrete usate successivamente da AES o 3DES."
    },
    {
        question: "Quale tecnologia proprietaria Cisco semplifica la creazione e la scalabilità di reti VPN aziendali complesse a stella (Hub-and-Spoke), permettendo ai router periferici (Spoke) di creare tunnel diretti e dinamici tra loro senza passare stabilmente dal centro?",
        options: [
            "GRE standard",
            "DMVPN (Dynamic Multipoint VPN)",
            "IPsec statico",
            "OpenVPN"
        ],
        correct: 1,
        rationale: "DMVPN combina tunnel GRE dinamici, IPsec e il protocollo NHRP per mappare gli IP pubblici, riducendo drasticamente la complessità di configurazione sui router centrali rispetto alle VPN tradizionali."
    },
    {
        question: "Nel contesto della Quality of Service (QoS), quale meccanismo di gestione delle code archivia i pacchetti in memoria man mano che arrivano e li inoltra rigorosamente in base all'ordine di arrivo, senza applicare alcuna priorità?",
        options: [
            "WFQ (Weighted Fair Queuing)",
            "FIFO (First-In, First-Out)",
            "CBWFQ",
            "LLQ (Low Latency Queuing)"
        ],
        correct: 1,
        rationale: "FIFO è la coda base: non fa distinzioni tra flussi voce, video o dati; il primo pacchetto memorizzato nel buffer è il primo a essere trasmesso. Può causare ritardi intollerabili per il traffico real-time in caso di congestione."
    },
    {
        question: "Quale algoritmo di accodamento QoS aggiunge una coda a priorità assoluta (Strict Priority Queue) ai meccanismi di Class-Based Weighted Fair Queuing, garantendo che i pacchetti voce sensibili al ritardo vengano serviti prima di qualsiasi altra cosa?",
        options: [
            "FIFO",
            "LLQ (Low Latency Queuing)",
            "Round Robin legacy",
            "Weighted Random Early Detection"
        ],
        correct: 1,
        rationale: "LLQ fornisce una corsia preferenziale immediata per i pacchetti voce (Voice over IP). Finché ci sono dati nella coda LLQ, il router li trasmette istantaneamente, prevenendo jitter e ritardi."
    },
    {
        question: "Nel modello QoS DiffServ (Differentiated Services), quanti bit dell'header IPv4 (all'interno del campo Type of Service) vengono utilizzati per definire il valore DSCP (Differentiated Services Code Point)?",
        options: [
            "2 bit",
            "4 bit",
            "6 bit",
            "8 bit"
        ],
        correct: 2,
        rationale: "Il modello DiffServ mappa i primi 6 bit del campo ToS (IPv4) o Traffic Class (IPv6) come DSCP, consentendo di definire fino a 64 classi di priorità differenti per il traffico."
    },
    {
        question: "Che cosa si intende per 'Jitter' nell'ambito della trasmissione dati in una rete aziendale?",
        options: [
            "Il tempo totale impiegato da un pacchetto per raggiungere la destinazione.",
            "La variazione nel tempo di arrivo dei singoli pacchetti appartenenti allo stesso flusso dati.",
            "La quantità di pacchetti scartati a causa di errori CRC.",
            "La velocità di trasmissione espressa in bps."
        ],
        correct: 1,
        rationale: "Il jitter misura l'irregolarità del ritardo (es. se un pacchetto ci mette 20ms e il successivo 50ms). Un jitter elevato distorce pesantemente le comunicazioni audio e video in tempo reale."
    },
    {
        question: "Quale tecnica QoS interviene per limitare la banda massima utilizzata da una classe di traffico scartando immediatamente i pacchetti in eccedenza non appena viene superata la soglia impostata?",
        options: [
            "Traffic Shaping",
            "Traffic Policing",
            "Congestion Avoidance",
            "Classification"
        ],
        correct: 1,
        rationale: "Il 'Policing' taglia in modo netto il traffico sopra la soglia massima scartando l'eccedenza, a differenza dello 'Shaping' che addolcisce i picchi trattenendo temporaneamente i pacchetti in un buffer."
    },
    {
        question: "Quale livello dell'architettura di rete Cisco a tre livelli (Three-Tier Enterprise Campus) è progettato per aggregare i collegamenti degli switch degli uffici, isolare i problemi di rete ed applicare policy di routing e liste di controllo degli accessi (ACL)?",
        options: [
            "Core Layer",
            "Distribution Layer",
            "Access Layer",
            "Data Link Layer"
        ],
        correct: 1,
        rationale: "Il livello di Distribuzione (Distribution Layer) fa da ponte: aggrega il traffico proveniente dall'Access Layer e implementa funzioni intelligenti come routing, ACL, QoS e definizioni dei confini di broadcast."
    },
    {
        question: "Quale modello di progettazione LAN per campus di medie dimensioni prevede la fusione del Core Layer e del Distribution Layer in un unico livello logico ed economico?",
        options: [
            "Modello Mesh completo",
            "Architettura a nucleo collassato (Collapsed Core Design)",
            "Architettura decentralizzata Ad-Hoc",
            "Spine-Leaf Architecture"
        ],
        correct: 1,
        rationale: "Nelle reti in cui un nucleo a tre livelli separati risulterebbe troppo costoso o sovradimensionato, si adotta il 'Collapsed Core', dove gli switch centrali svolgono contemporaneamente sia le funzioni di core che di distribuzione."
    },
    {
        question: "Nel cloud computing, quale modello di servizio fornisce all'utente l'accesso a un'infrastruttura IT virtualizzata (server, storage, risorse di rete) lasciando al cliente la gestione di sistemi operativi, middleware e applicazioni?",
        options: [
            "SaaS (Software as a Service)",
            "PaaS (Platform as a Service)",
            "IaaS (Infrastructure as a Service)",
            "ITaaS"
        ],
        correct: 2,
        rationale: "Con lo IaaS (es. AWS EC2 o macchine virtuali su Azure), il provider gestisce solo l'hardware fisico e l'hypervisor; l'utente riceve una macchina virtuale 'nuda' su cui installare ciò che preferisce."
    },
    {
        question: "Quale tipo di hypervisor (Tipo 1 - Bare Metal) viene installato ed eseguito direttamente sull'hardware fisico del server sottostante, senza la mediazione di un sistema operativo ospite?",
        options: [
            "Oracle VirtualBox",
            "VMware ESXi o Microsoft Hyper-V Server",
            "VMware Workstation",
            "VMware Player"
        ],
        correct: 1,
        rationale: "Gli hypervisor di Tipo 1 (Bare Metal) girano direttamente sul silicio della macchina, offrendo massime prestazioni, efficienza e stabilità per l'ambiente Enterprise (datacenter). VirtualBox è invece un Tipo 2 (Hosted)."
    },
    {
        question: "Quale tecnologia permette di astrarre le funzioni di controllo di una rete hardware spostandole in un'applicazione software centralizzata chiamata Controller SDN?",
        options: [
            "Software-Defined Networking (SDN)",
            "Spanning Tree Protocol extended",
            "Network Address Translation Enterprise",
            "Cisco StackWise"
        ],
        correct: 0,
        rationale: "SDN rivoluziona il networking separando il Control Plane (l'intelligenza che decide dove inviare i pacchetti, centralizzata nel controller) dal Data Plane (l'hardware dei singoli switch/router che esegue materialmente l'inoltro)."
    },
    {
        question: "All'interno di un'architettura SDN, come viene denominata l'interfaccia (API) utilizzata dal controller centrale per comunicare verso il basso con i singoli dispositivi di rete hardware (es. tramite OpenFlow o SSH)?",
        options: [
            "Northbound API",
            "Southbound API",
            "Eastbound Interface",
            "Westbound Interface"
        ],
        correct: 1,
        rationale: "Le Southbound API collegano il controller verso il basso (i dispositivi fisici della rete). Le Northbound API collegano invece il controller verso l'alto, ovvero verso applicazioni e cruscotti di management software."
    },
    {
        question: "Quale formato di serializzazione dei dati, ampiamente usato nelle REST API e nell'automazione di rete, organizza le informazioni in coppie 'chiave-valore' ed è racchiuso tra parentesi graffe `{}`?",
        options: [
            "XML",
            "JSON (JavaScript Object Notation)",
            "YAML",
            "HTML"
        ],
        correct: 1,
        rationale: "JSON è un formato leggero e facilmente leggibile sia dagli umani che dalle macchine. È diventato lo standard di fatto per scambiare configurazioni e dati tramite le API REST dei moderni apparati di rete."
    },
    {
        question: "Quale metodo/verbo HTTP viene tipicamente inviato in una richiesta REST API per creare una nuova risorsa o inviare dati di configurazione a un dispositivo gestito?",
        options: [
            "GET",
            "POST",
            "DELETE",
            "PUT"
        ],
        correct: 1,
        rationale: "Nelle API REST: GET si usa per leggere i dati, POST per creare una nuova risorsa, PUT per aggiornare/sostituire una configurazione esistente e DELETE per rimuoverla."
    },
    {
        question: "Quale strumento di gestione della configurazione (Configuration Management) open-source utilizza un'architettura 'Agentless' (non richiede software installato sui nodi) e si basa su file scritti in formato YAML denominati 'Playbook'?",
        options: [
            "Puppet",
            "Ansible",
            "Chef",
            "SaltStack"
        ],
        correct: 1,
        rationale: "Ansible si distingue perché si collega ai dispositivi di rete via SSH o API senza bisogno di un agente software locale. Sfrutta i 'Playbook' in formato YAML per definire gli stati di configurazione desiderati."
    },
    {
        question: "Quale comando permette di creare una lista di controllo degli accessi (ACL) standard numerata per bloccare il traffico proveniente esclusivamente dall'host 192.168.10.5?",
        options: [
            "access-list 10 deny host 192.168.10.5",
            "access-list 110 deny ip host 192.168.10.5 any",
            "access-list 10 deny 192.168.10.5 255.255.255.255",
            "access-list standard deny 192.168.10.5"
        ],
        correct: 0,
        rationale: "Le ACL standard usano i numeri da 1 a 99 (e da 1300 a 1999) e controllano solo l'indirizzo IP sorgente. La parola chiave 'host' sostituisce la wildcard mask 0.0.0.0."
    },
    {
        question: "Dove si raccomanda di posizionare logicamente una ACL di tipo Esteso (Extended) all'interno di una topologia di rete per ottimizzare le risorse?",
        options: [
            "Il più vicino possibile alla destinazione del traffico.",
            "Il più vicino possibile alla sorgente del traffico che deve essere controllato o bloccato.",
            "Esclusivamente sul router di confine verso Internet.",
            "Sui soli switch di distribuzione."
        ],
        correct: 1,
        rationale: "Poiché le ACL estese controllano sia l'origine che la destinazione (e le porte), bloccarle vicino alla sorgente evita che pacchetti destinati a essere scartati viaggino inutilmente occupando banda nella rete."
    },
    {
        question: "Quale wildcard mask deve essere associata a una subnet mask 255.255.255.240 durante la configurazione di una regola all'interno di una ACL Cisco?",
        options: [
            "0.0.0.15",
            "0.0.0.31",
            "0.0.0.7",
            "255.255.255.255"
        ],
        correct: 0,
        rationale: "La wildcard mask si ottiene sottraendo i singoli ottetti della subnet mask da 255.255.255.255. Quindi: 255-255=0, 255-255=0, 255-255=0, 255-240=15. Risultato: 0.0.0.15."
    },
    {
        question: "Cosa accade a un pacchetto IP che transita attraverso un'interfaccia router su cui è applicata una ACL, se il pacchetto non trova alcuna corrispondenza esplicita (match) in nessuna delle righe della lista?",
        options: [
            "Il pacchetto viene inoltrato comunque alla prima interfaccia libera.",
            "Il pacchetto viene scartato immediatamente a causa dell'implicito 'deny all' presente al termine di ogni lista di controllo accessi.",
            "Il pacchetto viene inviato in broadcast su tutta la rete.",
            "Il router genera un errore hardware."
        ],
        correct: 1,
        rationale: "Tutte le ACL Cisco terminano invisibilmente con una regola implicita di negazione totale ('deny any' o 'deny ip any any'). Se un pacchetto non soddisfa i criteri di nessuna riga precedente, viene eliminato."
    },
    {
        question: "Quale comando permette di associare l'ACL numerata 100 in modalità di ingresso (inbound) all'interfaccia fisica GigabitEthernet 0/0 di un router?",
        options: [
            "Router(config-if)# ip access-group 100 in",
            "Router(config-if)# ip access-list 100 input",
            "Router(config)# ip access-group 100 interface g0/0",
            "Router(config-if)# traffic-filter 100 in"
        ],
        correct: 0,
        rationale: "Per attivare un'ACL su un'interfaccia IP si utilizza il comando 'ip access-group [Numero/Nome] [in|out]'. Il comando 'traffic-filter' si usa invece in modo speculare per IPv6."
    },
    {
        question: "In una ACL di tipo Esteso (Extended), quale operatore logico viene combinato con la parola chiave 'eq' per bloccare o consentire una specifica porta di trasporto applicativa (es. la porta 80)?",
        options: [
            "eq (equal)",
            "neq (not equal)",
            "gt (greater than)",
            "lt (less than)"
        ],
        correct: 0,
        rationale: "L'operatore 'eq' indica 'equal to' (uguale a). Ad esempio, 'eq 80' o 'eq http' isola esattamente i segmenti destinati o provenienti dalla porta 80 del protocollo TCP o UDP."
    },
    {
        question: "Quale tipo di indirizzo IPv6 viene impiegato per trasmettere dati a un gruppo specifico di host, ma garantisce che il pacchetto venga recapitato esclusivamente all'host del gruppo che si trova topologicamente più vicino (Nearest) all'origine?",
        options: [
            "Multicast Address",
            "Anycast Address",
            "Global Unicast Address",
            "Link-Local Address"
        ],
        correct: 1,
        rationale: "Gli indirizzi Anycast sono IP globali assegnati a più dispositivi fisici. Il routing instrada il pacchetto verso la destinazione più vicina secondo le metriche dei protocolli di routing attivi, utilissimo per i server DNS distribuiti globalmente."
    },
    {
        question: "Quale protocollo di rete viene sfruttato per sincronizzare in modo millesimale gli orologi interni (orario e data) di tutti i router, switch e server aziendali basandosi su una sorgente temporale master affidabile?",
        options: [
            "NTP (Network Time Protocol)",
            "SNMP",
            "NAT",
            "Syslog"
        ],
        correct: 0,
        rationale: "NTP (porta UDP 123) garantisce che tutti gli apparati abbiano lo stesso orario. Questo è di fondamentale importanza per l'analisi cronologica dei file di log (Syslog) durante le indagini di sicurezza."
    },
    {
        question: "All'interno del protocollo NTP, cosa rappresenta il valore numerico denominato 'Stratum'?",
        options: [
            "Il livello di priorità di routing del pacchetto.",
            "La distanza geometrica ed il numero di passaggi (hop) che separano il dispositivo dalla sorgente temporale di riferimento primaria (orologio atomico o GPS).",
            "Il numero massimo di client connessi.",
            "Il livello di crittografia applicato al frame."
        ],
        correct: 1,
        rationale: "Lo Stratum definisce l'accuratezza: lo Stratum 0 è l'orologio atomico/GPS reale; lo Stratum 1 è il server direttamente connesso a esso. Più il numero aumenta (fino a 15), più il dispositivo è lontano dalla sorgente originale."
    },
    {
        question: "Quale livello di severità (Severity Level) viene associato nei messaggi di Syslog a un evento critico descritto come 'Emergency', indicando che il sistema è completamente inutilizzabile?",
        options: [
            "Livello 0",
            "Livello 1",
            "Livello 4",
            "Livello 7"
        ],
        correct: 0,
        rationale: "I livelli Syslog vanno da 0 (Emergency, massima gravità) a 7 (Debugging, messaggi di test). Il livello 0 indica un blocco totale e distruttivo dell'hardware o del sistema."
    },
    {
        question: "Quale strumento di monitoraggio e management permette a un amministratore di interrogare attivamente gli agenti software installati sugli switch (tramite Get/Set) o ricevere avvisi automatici asincroni (Trap) in caso di guasti?",
        options: [
            "SNMP (Simple Network Management Protocol)",
            "Syslog Daemon",
            "TFTP Client",
            "NetFlow Analyzer"
        ],
        correct: 0,
        rationale: "SNMP permette la gestione e la supervisione degli apparati. Il server centrale (NMS) raccoglie i dati leggendo le MIB dei dispositivi e riceve le notifiche spontanee immediate denominate 'Traps'."
    },
    {
        question: "Quale tecnologia proprietaria Cisco raccoglie statistiche dettagliate sul traffico IP in transito sulle interfacce (IP sorgente/destinazione, porte, classe di servizio) per scopi di auditing, contabilità e analisi della sicurezza?",
        options: [
            "SNMP",
            "NetFlow",
            "Syslog",
            "Port Mirroring (SPAN)"
        ],
        correct: 1,
        rationale: "NetFlow funziona come un contatore intelligente del traffico. Non cattura l'intero contenuto dei pacchetti (come fa SPAN), ma traccia l'identikit dei flussi dati fornendo metriche precise sull'uso della banda."
    },
    {
        question: "Cosa si intende per 'Attacco di tipo Ransomware'?",
        options: [
            "Un attacco che intercetta le credenziali sulle porte Telnet.",
            "Un malware malevolo che cifra l'intero file system della vittima rendendolo inaccessibile, richiedendo il pagamento di un riscatto in denaro per ottenere la chiave di sblocco.",
            "Un difetto hardware nell'alimentatore dei server.",
            "Un tentativo di brute force sulla console dello switch."
        ],
        correct: 1,
        rationale: "I ransomware bloccano l'operatività di intere aziende criptando server e backup, ricattando le vittime per estorcere denaro in cambio degli strumenti di decifratura."
    },
    {
        question: "Quale comando permette di abilitare a livello globale il motore di crittografia e autenticazione per le comunicazioni HSRP tra i router di un gruppo?",
        options: [
            "Router(config-if)# standby 1 authentication md5 key-string password123",
            "Router(config)# hsrp security enable password123",
            "Router(config-if)# standby encryption aes",
            "Router(config-router)# crypto hsrp map"
        ],
        correct: 0,
        rationale: "Il comando 'standby [gruppo] authentication' protegge HSRP impedendo l'inserimento di router estranei o malevoli nel gruppo tramite lo scambio sicuro di hash MD5."
    },
    {
        question: "Nel contesto dei sistemi operativi e dell'automazione, quale stile architetturale per le API sfrutta le funzionalità native del protocollo HTTP (stateless, uso dei metodi standard come GET/POST e URIs stabili) per interagire con i dati?",
        options: [
            "SOAP",
            "REST (Representational State Transfer)",
            "RPC legacy",
            "GraphQL"
        ],
        correct: 1,
        rationale: "Le API REST (o RESTful) sono largamente diffuse nell'automazione delle infrastrutture di rete moderne grazie alla loro semplicità, scalabilità e uso integrato dei metodi HTTP standard."
    },
    {
        question: "Quale stringa rappresenta un esempio corretto di URL utilizzata per interrogare una risorsa di configurazione tramite protocollo RESTCONF su un router aziendale?",
        options: [
            "https://192.168.1.1/restconf/data/ietf-interfaces:interfaces",
            "ftp://192.168.1.1/configs/router.cfg",
            "snmp://192.168.1.1/public/mib2",
            "telnet://192.168.1.1:23/show_run"
        ],
        correct: 0,
        rationale: "RESTCONF utilizza HTTPS per inviare e ricevere richieste strutturate in JSON o XML, esponendo le risorse del router attraverso percorsi URI standardizzati (es. `/restconf/data/...`)."
    },
// --- CCNA 3: BLOCCO 2 DI 3 (DOMANDE 51-100) ---
    {
        question: "Un amministratore di rete vuole configurare un'ACL estesa denominata per bloccare il traffico HTTPS proveniente dalla subnet 192.168.10.0/24 e diretto al server web aziendale con indirizzo 10.0.0.5. Quale comando esprime correttamente questa regola?",
        options: [
            "deny tcp 192.168.10.0 0.0.0.255 host 10.0.0.5 eq 443",
            "deny ip 192.168.10.0 255.255.255.0 host 10.0.0.5 eq 443",
            "deny tcp host 10.0.0.5 192.168.10.0 0.0.0.255 eq 443",
            "access-list 101 deny web 192.168.10.0 0.0.0.255 10.0.0.5"
        ],
        correct: 0,
        rationale: "Nelle ACL estese denominate, dopo il comando 'deny' o 'permit' si specifica il protocollo di trasporto (tcp per HTTPS), la rete sorgente con la sua wildcard mask, l'host di destinazione e infine la porta applicativa col costrutto 'eq 443'."
    },
    {
        question: "Cosa si intende per mitigazione degli attacchi tramite la feature 'DHCP Snooping' su uno switch Cisco Catalyst?",
        options: [
            "Consente di limitare la banda destinata ai pacchetti DHCP per prevenire congestioni.",
            "Configura le porte dello switch come 'trusted' (fidate) o 'untrusted' (non fidate) per bloccare i messaggi DHCP offer ed acknowledgement provenienti da server DHCP abusivi/malevoli.",
            "Cifra tutti i pacchetti DHCP in transito sulla LAN.",
            "Invia automaticamente alert al server Syslog ogni volta che un host richiede un IP."
        ],
        correct: 1,
        rationale: "Il DHCP Snooping crea una barriera di sicurezza: le porte collegate agli utenti finali sono 'untrusted'. Se da una porta untrusted entra un messaggio che tipicamente invia un server (come un DHCP Offer), lo switch lo intercetta e blocca l'attacco (Rogue DHCP Server)."
    },
    {
        question: "Quale tecnologia di sicurezza Layer 2 lavora in stretta sinergia con la tabella di binding del DHCP Snooping per prevenire gli attacchi di ARP Spoofing (Man-in-the-Middle)?",
        options: [
            "Dynamic ARP Inspection (DAI)",
            "IP Source Guard",
            "Port Security sticky",
            "BPDU Guard"
        ],
        correct: 0,
        rationale: "La Dynamic ARP Inspection (DAI) ispeziona i pacchetti ARP in transito. Se l'associazione tra MAC address e IP contenuta nel pacchetto ARP non coincide con i dati memorizzati nella tabella sicura del DHCP Snooping, il pacchetto viene scartato."
    },
    {
        question: "Quale vulnerabilità o attacco informatico viene bloccato configurando la feature 'IP Source Guard' sulle porte di accesso di uno switch?",
        options: [
            "Attacchi di tipo MAC Address Flooding.",
            "Attacchi basati su IP e MAC Spoofing (falsificazione dell'indirizzo sorgente).",
            "Loop generati da Spanning Tree disabilitato.",
            "Attacchi brute force sulle linee VTY."
        ],
        correct: 1,
        rationale: "IP Source Guard impedisce a un malintenzionato di cambiare il proprio indirizzo IP o MAC per impersonare un altro dispositivo autorizzato, controllando ogni frame in base alla tabella del DHCP Snooping."
    },
    {
        question: "Quale protocollo standard di sicurezza per reti wireless introduce la crittografia a 192 bit e rende obbligatorio l'uso del protocollo PMF (Protected Management Frames) per mitigare gli attacchi di deautenticazione?",
        options: [
            "WPA Standard",
            "WPA2 Personal",
            "WPA3 Enterprise",
            "WEP Open"
        ],
        correct: 2,
        rationale: "WPA3 Enterprise eleva i requisiti di sicurezza per gli ambienti aziendali introducendo algoritmi crittografici di livello militare (a 192 bit) e l'adozione obbligatoria dei frame di management protetti (PMF)."
    },
    {
        question: "Nel contesto delle reti wireless aziendali gestite tramite WLC (Wireless LAN Controller), quale protocollo di tunneling viene utilizzato per incapsulare e trasportare tutto il traffico dati e di management tra gli Access Point Lightweight (LAP) e il Controller centrale?",
        options: [
            "GRE",
            "CAPWAP (Control and Provisioning of Wireless Access Points)",
            "IPsec",
            "IEEE 802.1Q"
        ],
        correct: 1,
        rationale: "CAPWAP crea un tunnel logico tra ogni AP leggero e il WLC centrale. Tutto il traffico degli utenti wireless viene incapsulato in questo tunnel e convogliato al controller, che si occupa di applicare le policy e lo switching."
    },
    {
        question: "All'interno del protocollo di routing OSPF, come viene definita l'area centrale obbligatoria a cui tutte le altre aree secondarie devono essere fisicamente o logicamente connesse?",
        options: [
            "Area 1",
            "Area 100",
            "Area 0 (Spina dorsale o Backbone Area)",
            "Stub Area"
        ],
        correct: 2,
        rationale: "L'Area 0 è l'area di backbone in OSPF. Tutte le informazioni di routing tra aree differenti (inter-area) devono transitare obbligatoriamente attraverso l'Area 0 per prevenire loop di instradamento."
    },
    {
        question: "Quale indirizzo IPv4 Multicast viene utilizzato dai router OSPFv2 per inviare o ricevere messaggi di Hello e aggiornamenti di tipo Link-State a tutti i router OSPF presenti sul segmento?",
        options: [
            "224.0.0.5",
            "224.0.0.6",
            "224.0.0.9",
            "224.0.0.10"
        ],
        correct: 0,
        rationale: "L'indirizzo 224.0.0.5 è l'indirizzo multicast associato a 'All OSPF Routers'. Tutti i router che eseguono OSPF ascoltano su questo indirizzo. Il 224.0.0.6 è riservato invece solo ai router DR (Designated Router) e BDR."
    },
    {
        question: "Durante il processo di stabilimento dell'adiacenza OSPF, in quale stato i due router scambiano pacchetti DBD (Database Description) per confrontare i rispettivi Link-State Database?",
        options: [
            "Init",
            "ExStart",
            "Exchange",
            "Loading"
        ],
        correct: 2,
        rationale: "Nello stato 'Exchange' i router si scambiano i pacchetti DBD, che contengono un sommario del proprio database. Se un router nota di aver bisogno di informazioni aggiornate, passerà allo stato di 'Loading' inviando pacchetti LSR (Link State Request)."
    },
    {
        question: "Quale comando permette di attivare il protocollo OSPFv2 su un router Cisco assegnandogli l'ID di processo 10?",
        options: [
            "Router(config)# router ospf 10",
            "Router(config)# ip ospf process 10",
            "Router(config-if)# ip ospf 10 area 0",
            "Router(config)# network ospf 10"
        ],
        correct: 0,
        rationale: "Il comando globale 'router ospf [process-id]' avvia il motore OSPF. Il numero di ID di processo ha significato solo locale sul router e non deve necessariamente coincidere con quello dei router vicini."
    },
    {
        question: "In OSPF, come viene calcolata la metrica predefinita (Costo) di un'interfaccia?",
        options: [
            "In base al conteggio degli hop (salti) per raggiungere la destinazione.",
            "Dividendo la larghezza di banda di riferimento (Reference Bandwidth, di default 10^8 bps) per la larghezza di banda reale dell'interfaccia.",
            "Misurando il ritardo in microsecondi del cavo.",
            "Moltiplicando l'affidabilità per il carico del link."
        ],
        correct: 1,
        rationale: "OSPF usa un algoritmo basato sul costo ($Costo = \frac{Bandwidth\ di\ riferimento}{Bandwidth\ reale}$). Poiché la bandwidth di riferimento standard è 100 Mbps (10^8), interfacce più veloci come FastEthernet, Gigabit e 10Gigabit avranno tutte costo pari a 1, rendendo necessaria la modifica manuale del parametro 'auto-cost reference-bandwidth'."
    },
    {
        question: "Quale comando permette di forzare un router OSPF ad annunciare la propria rotta statica di default a tutti gli altri router della rete OSPF?",
        options: [
            "Router(config-router)# default-information originate",
            "Router(config-router)# redistribute static",
            "Router(config-router)# network 0.0.0.0 255.255.255.255 area 0",
            "Router(config-if)# ip ospf default-route"
        ],
        correct: 0,
        rationale: "Il comando 'default-information originate' ordina a OSPF di generare una LSA di tipo 5 esterna contenente la rotta statica di default (0.0.0.0/0), a patto che questa sia già configurata sul router stesso."
    },
    {
        question: "Quale tipo di pacchetto OSPF viene inviato da un router per richiedere esplicitamente informazioni più dettagliate su un record Link-State dopo aver ricevuto il sommario DBD da un vicino?",
        options: [
            "LSU (Link-State Update)",
            "LSAck (Link-State Acknowledgment)",
            "LSR (Link-State Request)",
            "Hello Packet"
        ],
        correct: 2,
        rationale: "I pacchetti LSR (Link-State Request) vengono usati per richiedere i record mancanti o più aggiornati rilevati durante lo stato di Exchange. Il destinatario risponderà con un pacchetto LSU."
    },
    {
        question: "Qual è il valore della Distanza Amministrativa (Administrative Distance) predefinita associata alle rotte apprese tramite il protocollo OSPF?",
        options: [
            "90",
            "110",
            "120",
            "170"
        ],
        correct: 1,
        rationale: "La Distanza Amministrativa misura l'affidabilità di un protocollo. OSPF ha un valore fisso pari a 110. (90 è per EIGRP, 120 per RIP, 1 per le rotte statiche)."
    },
    {
        question: "Cosa accade se su un segmento di rete Ethernet multi-accesso (es. uno switch) i due router OSPF hanno configurati Timer di Hello differenti?",
        options: [
            "I router funzionano ma lo scambio delle rotte rallenta.",
            "I router non riescono a stabilire una relazione di adiacenza (Neighbor Adjacency) ed ignorano i rispettivi pacchetti.",
            "Viene eletto un DR d'emergenza.",
            "I pacchetti generano un loop logico di Layer 3."
        ],
        correct: 1,
        rationale: "Perché l'adiacenza OSPF si formi con successo, quattro parametri devono coincidere tassativamente: l'Area ID, i Timer di Hello/Dead, i flag di autenticazione e i flag di area speciale (Stub)."
    },
    {
        question: "Quale comando permette di impedire la trasmissione di messaggi Hello OSPF su una specifica interfaccia (es. una LAN utenti) mantenendo comunque la rete associata attiva e pubblicata negli aggiornamenti di routing?",
        options: [
            "Router(config-router)# passive-interface <interfaccia>",
            "Router(config-if)# ip ospf block",
            "Router(config-router)# no network <rete>",
            "Router(config-if)# shutdown"
        ],
        correct: 0,
        rationale: "Il comando 'passive-interface' è fondamentale per la sicurezza e l'efficienza della rete: evita lo spreco di risorse CPU/banda e impedisce che attori malevoli colleghino router abusivi sulla rete utenti per alterare le tabelle di routing aziendali."
    },
    {
        question: "Nelle architetture Cloud, quale modello di deployment prevede un'infrastruttura condivisa ed accessibile esclusivamente da un gruppo ristretto di organizzazioni che hanno esigenze di sicurezza o conformità legali simili (es. banche o enti governativi)?",
        options: [
            "Public Cloud",
            "Private Cloud",
            "Community Cloud",
            "Hybrid Cloud"
        ],
        correct: 2,
        rationale: "Il Community Cloud è un modello intermedio in cui le risorse cloud sono condivise tra diverse organizzazioni di uno specifico settore con requisiti comuni, offrendo costi ridotti rispetto al cloud privato ma maggiore isolamento rispetto al cloud pubblico."
    },
    {
        question: "Nel contesto dei sistemi operativi e dello sviluppo software, che cosa contraddistingue un 'Container' (come Docker) rispetto a una tradizionale Macchina Virtuale (VM)?",
        options: [
            "Il Container richiede hardware dedicato non virtualizzato.",
            "Il Container non include un intero sistema operativo guest, ma condivide il kernel del sistema operativo dell'host, risultando incredibilmente più leggero ed efficiente.",
            "Il Container è più pesante e lento ad avviarsi rispetto a una VM.",
            "Il Container funziona solo in ambiente cloud pubblico."
        ],
        correct: 1,
        rationale: "Le VM richiedono un Hypervisor e contengono un intero sistema operativo guest (inclusi i driver hardware virtuali). I container invece isolano solo lo spazio utente (User Space) e l'applicazione, avviandosi in pochi millisecondi e occupando pochissimo spazio in memoria."
    },
    {
        question: "Quale strumento grafico Cisco centralizzato permette di gestire l'intera architettura di automazione aziendale (SDN), offrendo strumenti come l'interfaccia PnP (Plug and Play) per il provisioning automatico degli apparati?",
        options: [
            "Cisco DNA Center / Catalyst Center",
            "Cisco ASDM",
            "Cisco Packet Tracer",
            "Cisco IOS-XE CLI"
        ],
        correct: 0,
        rationale: "Cisco DNA Center (ora Catalyst Center) è il controller SDN di riferimento per le reti Enterprise Campus, in grado di gestire l'intera infrastruttura hardware tramite interfacce web e policy centralizzate astratte (Intent-Based Networking)."
    },
    {
        question: "Quale caratteristica descrive accuratamente il comportamento dello strumento di automazione 'Puppet'?",
        options: [
            "È completamente Agentless e comunica via SSH.",
            "Utilizza un'architettura basata su un server centrale (Puppet Master) ed richiede l'installazione di un software agente (Agent) locale sui nodi gestiti per applicare le configurazioni scritte in codice dichiarativo.",
            "Si basa su file scritti in formato JSON denominati Cookbooks.",
            "Viene eseguito solo tramite comandi manuali via console seriale."
        ],
        correct: 1,
        rationale: "A differenza di Ansible (che è agentless), Puppet ed anche Chef adottano un modello basato su agenti installati direttamente sui sistemi operativi dei nodi da monitorare e configurare periodicamente."
    },
    {
        question: "Nell'automazione di rete, quale linguaggio di modellazione dei dati standardizzato (definito dalla RFC 6020) viene utilizzato per descrivere in modo indipendente le strutture e le configurazioni degli apparati di rete, alimentando i protocolli NETCONF e RESTCONF?",
        options: [
            "YAML",
            "YANG",
            "XML",
            "JSON"
        ],
        correct: 1,
        rationale: "YANG è il linguaggio di modellazione dei dati. Non serve a trasportare i dati o a scriverli, ma definisce la 'struttura logica' (lo schema) delle configurazioni. I protocolli come NETCONF e RESTCONF usano poi rispettivamente XML o JSON per inviare i dati reali strutturati secondo lo schema YANG."
    },
    {
        question: "Nello sviluppo software e nell'automazione tramite Git, quale comando permette di scaricare sul proprio computer locale una copia esatta di un repository ospitato in remoto su GitHub?",
        options: [
            "git push",
            "git clone",
            "git commit",
            "git init"
        ],
        correct: 1,
        rationale: "Il comando 'git clone [URL]' scarica in locale la cronologia dei commit e l'intera alberatura dei file di un progetto remoto."
    },
    {
        question: "Quale comando permette di verificare l'applicazione in tempo reale dei parametri QoS e lo stato dettagliato dei contatori delle code configurati su un'interfaccia di un router Cisco?",
        options: [
            "show policy-map interface <interfaccia>",
            "show ip qos summary",
            "show class-map status",
            "show running-config interface"
        ],
        correct: 0,
        rationale: "Il comando 'show policy-map interface' mostra se la mappa di policy QoS sta intercettando i pacchetti corretti, quanti bit sono stati marcati/scartati e lo stato attuale dei buffer di accodamento."
    },
    {
        question: "Quale tipologia di minaccia alla sicurezza informatica prevede che un utente interno legittimo (Infiltrato o dipendente scontento) utilizzi deliberatamente i suoi privilegi d'accesso per sottrarre dati riservati o danneggiare gli asset aziendali?",
        options: [
            "Phishing attack",
            "Minaccia interna (Insider Threat)",
            "Attacco Man-in-the-Middle",
            "Spoofing di identità"
        ],
        correct: 1,
        rationale: "Le Insider Threat sono tra i rischi più complessi da identificare perché l'utente possiede già credenziali valide e si muove all'interno del perimetro protetto dei firewall aziendali."
    },
    {
        question: "Cosa si intende per 'Zero Trust' nel contesto della sicurezza delle moderne reti aziendali ed enterprise?",
        options: [
            "Un'architettura in cui tutti i dispositivi all'interno della LAN sono considerati sicuri a priori.",
            "Un modello di sicurezza basato sul principio 'non fidarsi mai, verificare sempre', in cui ogni utente e dispositivo deve essere autenticato, autorizzato e validato continuamente, indipendentemente dal fatto che si trovi dentro o fuori il perimetro di rete.",
            "Una configurazione che disabilita le password sugli switch di test.",
            "Un sistema operativo per firewall che blocca ogni pacchetto in uscita."
        ],
        correct: 1,
        rationale: "Zero Trust ribalta il vecchio concetto di sicurezza 'perimetrale' (sicuro dentro, insicuro fuori). Nel panorama moderno, ogni singola richiesta di accesso deve essere ispezionata e validata prima di concedere il minimo privilegio necessario."
    },
    {
        question: "Quale tipo di attacco di Layer 2 mira a riempire completamente la memoria CAM (MAC Address Table) di uno switch immettendovi migliaia di frame Ethernet falsi con indirizzi MAC sorgenti generati casualmente, trasformando lo switch in un hub?",
        options: [
            "ARP Spoofing",
            "MAC Flooding Attack",
            "DHCP Starvation",
            "VLAN Hopping"
        ],
        correct: 1,
        rationale: "Con il MAC Flooding, la tabella CAM si satura. Non potendo memorizzare nuovi MAC validi, lo switch va in modalità 'fail-open' e inizia a inviare in flooding (broadcast) ogni singolo frame unicast su tutte le porte, permettendo all'attaccante di intercettare passivamente il traffico altrui."
    },
    {
        question: "Quale comando permette di configurare una porta switch in modo da disattivarsi immediatamente (stato err-disabled) se viene rilevata una violazione dei vincoli di Port Security?",
        options: [
            "switchport port-security violation shutdown",
            "switchport port-security violation restrict",
            "switchport port-security violation protect",
            "switchport port-security action disable"
        ],
        correct: 0,
        rationale: "La modalità 'shutdown' è quella predefinita in Cisco Port Security. Spegne fisicamente l'interfaccia mettendola in stato 'err-disabled' e genera un log Syslog immediato; per riattivarla l'amministratore dovrà digitare i comandi 'shutdown' e 'no shutdown' sull'interfaccia."
    },
    {
        question: "Un utente malevolo invia messaggi ARP Reply falsificati associando l'indirizzo IP del gateway predefinito al proprio indirizzo MAC fisico. Come si chiama questa specifica tecnica di attacco?",
        options: [
            "DHCP Spoofing",
            "ARP Spoofing / ARP Poisoning",
            "MAC Table Overflow",
            "IP Address Starvation"
        ],
        correct: 1,
        rationale: "L'ARP Spoofing (o avvelenamento della cache ARP) permette all'attaccante di ridirigere il traffico della vittima verso il proprio computer, attuando un attacco Man-in-the-Middle o un Denial of Service."
    },
    {
        question: "Quale attacco informatico mira a esaurire l'intero pool di indirizzi IP disponibili su un server DHCP legittimo inviando raffiche continue di messaggi DHCP Discover con indirizzi MAC spoofati?",
        options: [
            "DHCP Starvation Attack",
            "Rogue DHCP Server Attack",
            "ARP Cache Poisoning",
            "ICMP Flooding"
        ],
        correct: 0,
        rationale: "L'attacco di 'DHCP Starvation' (inedia) prosciuga gli IP del server. Quando gli utenti legittimi provano ad accedere alla rete non ottengono alcun IP, rimanendo disconnessi o diventando vulnerabili a un server DHCP abusivo posizionato dall'attaccante."
    },
    {
        question: "Come viene definito il meccanismo di attacco Layer 2 che consente a un host configurato su una determinata VLAN di scavalcare le protezioni e inviare frame direttamente a una VLAN diversa senza passare da un router?",
        options: [
            "VLAN Hopping",
            "MAC Spoofing",
            "STP Takeover",
            "Double Encapsulation bypass"
        ],
        correct: 0,
        rationale: "Il VLAN Hopping sfrutta la configurazione errata del protocollo DTP (creando un trunk abusivo) o la tecnica della doppia marcatura (Double Tagging) per far saltare ai pacchetti i confini logici nativi delle VLAN."
    },
    {
        question: "Per prevenire attacchi di VLAN Hopping basati sul protocollo DTP (Dynamic Trunking Protocol), quale configurazione è considerata una best-practice fondamentale sulle porte di accesso destinate agli utenti?",
        options: [
            "Abilitare il protocollo Spanning Tree PortFast.",
            "Disabilitare la negoziazione del trunk tramite il comando 'switchport nonegotiate' e forzare la porta in modalità access.",
            "Assegnare la porta alla VLAN nativa (VLAN 1).",
            "Configurare la porta in modalità trunk dinamica."
        ],
        correct: 1,
        rationale: "Forzando la modalità access con 'switchport mode access' e disattivando DTP con 'switchport nonegotiate', si nega all'utente la possibilità di negoziare un collegamento trunk ingannando lo switch."
    },
    {
        question: "Quale comando permette di attivare globalmente la funzionalità DHCP Snooping su uno switch Cisco Catalyst?",
        options: [
            "Switch(config)# ip dhcp snooping",
            "Switch(config-if)# ip dhcp snooping trust",
            "Switch(config)# ip dhcp snooping vlan 10",
            "Switch(config)# dhcp-server security monitor"
        ],
        correct: 0,
        rationale: "Il comando globale è 'ip dhcp snooping'. Ricorda che dopo averlo attivato globalmente, è necessario specificare su quali VLAN applicarlo con il comando 'ip dhcp snooping vlan [ID]'."
    },
    {
        question: "In uno switch su cui è attivo il DHCP Snooping, quale comando deve essere digitato sull'interfaccia collegata al server DHCP legittimo per fare in modo che i messaggi di risposta non vengano bloccati?",
        options: [
            "Switch(config-if)# ip dhcp snooping trust",
            "Switch(config-if)# ip dhcp snooping untrusted",
            "Switch(config-if)# ip dhcp server local",
            "Switch(config-if)# ip dhcp snooping limit rate 100"
        ],
        correct: 0,
        rationale: "Le porte collegate a server DHCP aziendali o a uplink verso altri switch sicuri devono essere esplicitamente configurate come 'trust'. Le porte utente sono invece 'untrusted' per impostazione predefinita."
    },
    {
        question: "In un'architettura di autenticazione basata sullo standard IEEE 802.1X, quale ruolo viene ricoperto dallo switch di rete fisico che intercetta le richieste dell'utente e le inoltra al server RADIUS centrale?",
        options: [
            "Supplicant",
            "Authenticator",
            "Authentication Server",
            "Gateway Identity"
        ],
        correct: 1,
        rationale: "Nello standard 802.1X: il PC dell'utente è il 'Supplicant' (richiedente); lo switch o l'Access Point è l' 'Authenticator' (intermediario); il server RADIUS/ISE è l' 'Authentication Server' che detiene il database delle credenziali."
    },
    {
        question: "Quale protocollo di sicurezza wireless per piccoli uffici o reti domestiche (SOHO) introduce il meccanismo SAE (Simultaneous Authentication of Equals) per sostituire la vulnerabile chiave pre-condivisa (PSK) e bloccare gli attacchi di brute force offline?",
        options: [
            "WPA2 Personal",
            "WPA3 Personal",
            "WEP 128-bit",
            "WPA Enterprise"
        ],
        correct: 1,
        rationale: "WPA3 Personal introduce il protocollo SAE, che mette in sicurezza lo scambio della chiave iniziale. Anche se l'utente sceglie una password debole, l'attaccante non può decifrare il traffico catturato o eseguire attacchi di dizionario offline."
    },
    {
        question: "Nel contesto dei sistemi operativi e dell'automazione, qual è il vantaggio principale derivante dall'utilizzo di strumenti di Infrastructure as Code (IaC) nella gestione dei datacenter?",
        options: [
            "Aumenta il consumo di energia dei server.",
            "Permette di definire, testare, distribuire e replicare l'intera infrastruttura hardware e di rete tramite file di codice sorgente scritti in modo chiaro ed automatico, riducendo gli errori umani.",
            "Elimina la necessità di utilizzare switch fisici.",
            "Sostituisce completamente i protocolli di routing con script Python."
        ],
        correct: 1,
        rationale: "L'IaC (gestito con strumenti come Ansible, Terraform o CloudFormation) consente di trattare le configurazioni di rete come normale software: tracciabile con Git, revisionabile e applicabile in modo identico e ripetibile su migliaia di macchine."
    },
    {
        question: "Quale tipo di messaggio OSPFv2 viene inviato da un router per confermare la corretta ricezione di un aggiornamento Link-State (LSU) da parte di un router vicino, garantendo l'affidabilità delle comunicazioni?",
        options: [
            "LSAck (Link-State Acknowledgment)",
            "Hello Packet",
            "DBD",
            "LSR"
        ],
        correct: 0,
        rationale: "OSPF non si appoggia al protocollo TCP per garantire la consegna affidabile, ma gira direttamente sul pacchetto IP (protocollo numero 89) e implementa un proprio sistema di conferme tramite i pacchetti LSAck."
    },
    {
        question: "Cosa accade se in una rete ad area singola OSPFv2 (Multi-access network) due router hanno impostata la stessa identica priorità di interfaccia per l'elezione del Designated Router (DR)?",
        options: [
            "L'elezione fallisce ed il protocollo si blocca.",
            "Viene eletto come DR il router che possiede il Router ID (RID) numericamente più alto.",
            "L'elezione viene decisa in base al MAC address dello switch centrale.",
            "Il router con il minor indirizzo IP sull'interfaccia passiva diventa DR."
        ],
        correct: 1,
        rationale: "In caso di parità di priorità (il cui default è 1), OSPF ricorre al Router ID come discriminante secondaria: vince il Router ID numericamente più elevato."
    },
    {
        question: "Qual è la formula corretta definita da Cisco per stabilire in modo univoco il valore del Router ID (RID) all'interno di un processo OSPF, qualora non sia stato configurato esplicitamente il comando 'router-id'?",
        options: [
            "L'indirizzo IP attivo più basso tra tutte le interfacce fisiche.",
            "L'indirizzo IP attivo più alto configurato su qualsiasi interfaccia logica di Loopback; se non sono presenti loopback, viene scelto l'indirizzo IP attivo più alto tra le interfacce fisiche.",
            "Il MAC address dell'interfaccia di management dello switch.",
            "Un numero casuale generato dall'orologio NTP al boot."
        ],
        correct: 1,
        rationale: "L'algoritmo di selezione automatica del Router ID (RID) preferisce le interfacce di loopback perché sono interfacce virtuali stabili che non rischiano di andare in stato 'down' compromettendo il processo. Se mancano, si ripiega sull'IP più alto delle interfacce fisiche attive."
    },
    {
        question: "Quale comando permette di verificare rapidamente se un router OSPF ha stabilito correttamente relazioni di vicinato con gli altri router adiacenti, mostrando lo stato (es. FULL/DR o FULL/BDR)?",
        options: [
            "show ip ospf neighbor",
            "show ip ospf database",
            "show ip route ospf",
            "show ip ospf interfaces"
        ],
        correct: 0,
        rationale: "Il comando 'show ip ospf neighbor' è lo strumento principale di troubleshooting OSPF: elenca i vicini, i loro Router ID, la priorità, lo stato dell'adiacenza e l'interfaccia locale su cui è attiva la connessione."
    },
    {
        question: "Cosa indica lo stato OSPF 'FULL/2WAY' se visualizzato nell'output del comando 'show ip ospf neighbor' tra due router attestati su uno switch Ethernet?",
        options: [
            "I due router hanno un errore di configurazione dei timer.",
            "È la normale e corretta condizione di adiacenza tra due router DROther (non DR e non BDR), che scambiano messaggi Hello ma non sincronizzano direttamente i database tra loro.",
            "La tabella di routing è andata in crash a causa di un loop.",
            "L'elezione del DR è ancora in corso."
        ],
        correct: 1,
        rationale: "Sulle reti multi-accesso (Ethernet), i router che non sono né DR né BDR vengono chiamati DROther. Essi stabiliscono uno stato '2-Way' tra di loro (si conoscono e si scambiano Hello) ma sincronizzano il database (stato FULL) solo con il DR ed il BDR per limitare i pacchetti di aggiornamento sulla rete."
    },
    {
        question: "Quale tipo di ACL permette di filtrare il traffico dati basandosi esclusivamente sull'indirizzo IP di sorgente e deve essere applicata il più vicino possibile alla destinazione del traffico?",
        options: [
            "ACL Estesa (Extended)",
            "ACL Standard",
            "ACL Dinamica reflex",
            "IPv6 Traffic Filter"
        ],
        correct: 1,
        rationale: "Le ACL Standard controllano unicamente l'IP di origine. Poiché non possono verificare la destinazione o le porte, se venissero applicate vicino alla sorgente rischierebbero di bloccare tutto il traffico legittimo dell'utente verso qualsiasi altra rete; per questo si posizionano vicino alla destinazione."
    },
    {
        question: "Che cosa descrive l'acronimo 'REST' nell'ambito delle tecnologie web e dell'automazione delle infrastrutture IT?",
        options: [
            "Routing Extended System Transport",
            "Representational State Transfer",
            "Remote Encapsulation Security Tunnel",
            "Responsive Encryption Standard Protocol"
        ],
        correct: 1,
        rationale: "REST è uno stile architetturale software per sistemi distribuiti. Si appoggia interamente sul protocollo HTTP, rendendo lo scambio di dati leggero e integrato nativamente con il web."
    },
    {
        question: "Quale combinazione di tasti sulla CLI Cisco permette di interrompere bruscamente l'esecuzione di un comando di diagnostica prolungato, come un ping esteso o una risoluzione dei nomi DNS (Domain Name Lookup) errata?",
        options: [
            "Ctrl + C",
            "Ctrl + Shift + 6",
            "Ctrl + Z",
            "Esc"
        ],
        correct: 1,
        rationale: "La combinazione speciale 'Ctrl + Shift + 6' invia un segnale di escape all'IOS di Cisco, interrompendo immediatamente processi bloccanti come i ping infiniti o le attese di risoluzione dei nomi DNS fallite."
    },
    {
        question: "In una rete aziendale, quale meccanismo della Quality of Service (QoS) permette di rallentare temporaneamente l'invio dei pacchetti in eccesso immagazzinandoli in un buffer di memoria, modellando il traffico in un flusso costante per allinearsi alla banda contrattuale?",
        options: [
            "Traffic Policing",
            "Traffic Shaping",
            "Classification and Marking",
            "Congestion Avoidance"
        ],
        correct: 1,
        rationale: "Il Traffic Shaping non scarta i pacchetti che superano la soglia massima (come fa il Policing), ma li trattiene temporaneamente nei buffer per trasmetterli subito dopo, riducendo le perdite di pacchetti a spese di un leggero aumento del ritardo."
    },
    {
        question: "Quale attacco di social engineering consiste nel seguire fisicamente una persona autorizzata all'interno di un'area aziendale protetta da badge (es. una sala server), approfittando della porta lasciata aperta per superare i controlli d'accesso?",
        options: [
            "Phishing",
            "Accodamento (Tailgating / Piggybacking)",
            "Shoulder Surfing",
            "Vishing"
        ],
        correct: 1,
        rationale: "Il Tailgating (o accodamento) fa leva sulla cortesia o sulla distrazione dei dipendenti per violare la sicurezza fisica degli edifici aziendali senza possedere un badge o un'autorizzazione valida."
    },
    {
        question: "Quale tipo di VPN cifrata garantisce la massima riservatezza dei dati offrendo funzionalità di sicurezza come l'incapsulamento sicuro, l'autenticazione dei peer tramite chiavi pre-condivise o certificati digitali e la protezione anti-replay?",
        options: [
            "GRE Tunnel nativo",
            "VPN protetta da IPsec",
            "PPTP legacy tunnel",
            "Multipoint non-secure GRE"
        ],
        correct: 1,
        rationale: "Mentre protocolli come GRE creano solo un'incapsulamento logico lasciando i dati in chiaro, l'aggiunta di IPsec (o l'uso di VPN IPsec native) scherma l'intero flusso dati aziendale tramite algoritmi di crittografia e controllo di integrità avanzati."
    },
    {
        question: "Nel protocollo OSPFv2, qual è il valore numerico di priorità predefinito impostato sulle interfacce di un router? Se impostato a 0, cosa comporta?",
        options: [
            "La priorità di default è 1. Se impostata a 0, esclude categoricamente l'interfaccia del router dalla partecipazione all'elezione di DR e BDR.",
            "La priorità di default è 100. Se impostata a 0, il router diventa immediatamente il DR assoluto.",
            "La priorità di default è 255. Se impostata a 0, l'interfaccia viene disattivata fisicamente.",
            "La priorità di default è 10. Se impostata a 0, il router passa in modalità passiva automatica."
        ],
        correct: 0,
        rationale: "La priorità predefinita è 1. Impostando la priorità a 0 tramite il comando 'ip ospf priority 0', l'amministratore decide che quell'interfaccia non dovrà mai diventare DR o BDR, rimanendo stabilmente nello stato di DROther."
    },
    {
        question: "Quale comando permette di visualizzare in modo sintetico lo stato di tutte le interfacce IP configurate su un router Cisco, includendo l'indirizzo IP associato e lo stato fisico/logico (Status/Protocol)?",
        options: [
            "show running-config",
            "show ip interface brief",
            "show protocols",
            "show interfaces status"
        ],
        correct: 1,
        rationale: "Il comando 'show ip interface brief' è il comando di diagnostica Layer 3 più usato in assoluto: fornisce un quadro immediato e compatto di quali interfacce sono 'up/up' (funzionanti) o 'down/down'."
    },
// --- CCNA 3: BLOCCO 3 DI 3 (DOMANDE 101-150) ---
    {
        question: "Quale vantaggio principale offre l'implementazione di OSPF Multi-Area rispetto a un'architettura OSPF a singola area (Single-Area)?",
        options: [
            "Consente di eliminare completamente la necessità di utilizzare l'Area 0.",
            "Riduce la dimensione dei Link-State Database (LSDB), limita l'elaborazione dell'algoritmo SPF riducendo il consumo di CPU e circoscrive l'impatto dei cambi di topologia all'interno della sola area interessata.",
            "Permette di cifrare automaticamente tutti i pacchetti dati degli utenti a livello Layer 2.",
            "Aumenta il numero di hop massimi consentiti a un valore superiore a 255."
        ],
        correct: 1,
        rationale: "Dividendo la rete in aree, i router non devono più conoscere ogni singolo dettaglio della topologia globale. I router interni calcolano SPF solo per la propria area, mentre le informazioni delle altre aree vengono ricevute in modo riassuntivo, salvando risorse hardware preziose."
    },
    {
        question: "Come viene denominato un router OSPF che ha interfacce attive attestate su più aree differenti (ad esempio, un'interfaccia nell'Area 0 e una nell'Area 10)?",
        options: [
            "Internal Router (IR)",
            "Area Border Router (ABR)",
            "Autonomous System Boundary Router (ASBR)",
            "Backbone Router (BR)"
        ],
        correct: 1,
        rationale: "Un ABR (Area Border Router) si posiziona sul confine tra due o più aree OSPF (di cui una deve obbligatoriamente essere l'Area 0). Ha il compito di rigenerare le LSA riassuntive descrivendo le reti da un'area all'altra."
    },
    {
        question: "Quale ruolo ricopre un router all'interno di una topologia OSPF se importa informazioni di routing esterne apprese da un altro protocollo (come BGP o rotte statiche non OSPF) all'interno del dominio OSPF aziendale?",
        options: [
            "Designated Router (DR)",
            "Area Border Router (ABR)",
            "Autonomous System Boundary Router (ASBR)",
            "Backbone Core Router"
        ],
        correct: 2,
        rationale: "Un ASBR (Autonomous System Boundary Router) fa da gateway tra il mondo OSPF e l'esterno (altri protocolli di routing, Internet o rotte statiche), inserendo queste reti esterne tramite LSA di tipo 5."
    },
    {
        question: "Quale tipologia di record LSA (Link-State Advertisement) viene generata da un router ABR per pubblicare i prefissi di rete di un'area all'interno di un'altra area OSPF (Rotte Inter-Area)?",
        options: [
            "LSA Tipo 1 (Router LSA)",
            "LSA Tipo 2 (Network LSA)",
            "LSA Tipo 3 (Summary LSA)",
            "LSA Tipo 5 (AS External LSA)"
        ],
        correct: 2,
        rationale: "Le LSA di Tipo 3 sono Summary LSA create dagli ABR per descrivere le reti apprese in un'area e iniettarle nelle altre aree del dominio OSPF."
    },
    {
        question: "In un output della tabella di routing Cisco (mostrata con il comando 'show ip route'), quale prefisso o lettera identifica una rotta appresa tramite OSPF ma proveniente da un'area differente (Inter-Area)?",
        options: [
            "O",
            "O IA",
            "O E1",
            "O E2"
        ],
        correct: 1,
        rationale: "La lettera 'O' indica una rotta OSPF intra-area (stessa area). Il codice 'O IA' indica esplicitamente una rotta OSPF Inter-Area, ovvero proveniente da un'area diversa tramite un ABR."
    },
    {
        question: "Un amministratore di rete nota che un router OSPF non sta formando l'adiacenza con un vicino. Verificando i parametri, scopre che MTU (Maximum Transmission Unit) delle interfacce connesse non coincide. In quale stato del processo OSPF si bloccherà il router?",
        options: [
            "Down State",
            "ExStart / Exchange State",
            "2-Way State",
            "Loading State"
        ],
        correct: 1,
        rationale: "Se i valori di MTU non corrispondono su entrambi i lati del link, i router si bloccano nella fase di ExStart/Exchange durante lo scambio dei pacchetti DBD (Database Description), poiché non riescono a concordare la dimensione massima dei pacchetti da trasferire."
    },
    {
        question: "Quale comando permette di verificare la configurazione globale del protocollo OSPF sul router, mostrando l'ID del processo, l'ID del router, i filtri di routing e le aree configurate?",
        options: [
            "show ip protocols",
            "show ip ospf database",
            "show ip route ospf",
            "show ip interface brief"
        ],
        correct: 0,
        rationale: "Il comando 'show ip protocols' fornisce una panoramica completa di tutti i protocolli di routing dinamico attivi sul dispositivo, mostrando dettagli strutturali e ID operativi."
    },
    {
        question: "Per motivi di sicurezza aziendale, si desidera configurare l'accesso remoto alla CLI degli switch esclusivamente tramite protocollo SSH, disattivando Telnet. Quale comando applicato sulle linee VTY forza questo comportamento?",
        options: [
            "Switch(config-line)# transport input ssh",
            "Switch(config-line)# login local",
            "Switch(config)# ip ssh version 2",
            "Switch(config-line)# transport input telnet ssh"
        ],
        correct: 0,
        rationale: "Il comando 'transport input ssh' specifica che sulle linee virtuali (VTY) deve essere accettato solo ed esclusivamente traffico SSH. Qualsiasi tentativo di connessione Telnet in chiaro verrà rifiutato dallo switch."
    },
    {
        question: "Quale comando permette di generare la coppia di chiavi crittografiche RSA necessarie al router Cisco per attivare il server SSH per l'amministrazione sicura?",
        options: [
            "Router(config)# crypto key generate rsa",
            "Router(config)# ip ssh v2 enable",
            "Router(config-if)# ssh key-pair generate",
            "Router(config)# security passwords encryption"
        ],
        correct: 0,
        rationale: "SSH richiede una coppia di chiavi asimmetriche per cifrare la sessione. Il comando 'crypto key generate rsa' avvia la generazione di queste chiavi (Cisco consiglia un modulo minimo di 1024 o 2048 bit)."
    },
    {
        question: "Prima di poter generare le chiavi RSA e abilitare SSH su un apparato Cisco IOS, quali due requisiti preliminari di configurazione globale devono essere soddisfatti sul dispositivo?",
        options: [
            "Un indirizzo IP di loopback ed il protocollo OSPF attivo.",
            "Un nome host (hostname) univoco ed un nome di dominio IP (ip domain-name) configurati.",
            "L'abilitazione del DHCP Snooping ed un'ACL standard.",
            "La disattivazione del server HTTP ed un server NTP configurato."
        ],
        correct: 1,
        rationale: "Cisco IOS utilizza la combinazione dell'hostname e del domain-name (es. `Router1.aziende.it`) come nome completo (FQDN) per firmare e generare la chiave crittografica RSA. Senza di essi, il comando crypto fallisce."
    },
    {
        question: "Quale comando permette di salvare in modo definitivo la configurazione attualmente attiva nella RAM (Running-Config) all'interno della memoria NVRAM (Startup-Config), prevenendo la perdita di dati al riavvio?",
        options: [
            "copy running-config startup-config (oppure 'write')",
            "copy startup-config running-config",
            "save current configuration",
            "export config flash:"
        ],
        correct: 0,
        rationale: "Il comando 'copy running-config startup-config' scrive le modifiche correnti nella NVRAM non volatile, in modo che l'apparato le mantenga memorizzate al successivo boot."
    },
    {
        question: "Durante la procedura di password recovery su un router Cisco, quale valore deve essere impostato nel registro di configurazione (Configuration Register) per istruire il router a saltare il caricamento della startup-config all'avvio?",
        options: [
            "0x2102",
            "0x2142",
            "0xf200",
            "0x2115"
        ],
        correct: 1,
        rationale: "Il registro standard è 0x2102 (carica normalmente la configurazione). Impostandolo a 0x2142 dalla modalità ROMMON, il router ignora la NVRAM e si avvia con la configurazione vuota di fabbrica, permettendo all'amministratore di recuperare l'accesso."
    },
    {
        question: "In quale memoria non volatile di un router Cisco viene memorizzato il file d'immagine reale del sistema operativo Cisco IOS (file con estensione .bin)?",
        options: [
            "RAM",
            "NVRAM",
            "Flash Memory",
            "ROM"
        ],
        correct: 2,
        rationale: "La memoria Flash funge da 'hard disk' per il router e conserva l'immagine compressa del sistema operativo (.bin) anche quando il dispositivo viene spento."
    },
    {
        question: "Quale comando permette di copiare in tutta sicurezza il file del sistema operativo IOS presente nella Flash del router su un server TFTP aziendale per disporre di un backup d'emergenza?",
        options: [
            "copy flash: tftp:",
            "copy tftp: flash:",
            "copy running-config tftp:",
            "archive backup tftp"
        ],
        correct: 0,
        rationale: "Il comando 'copy flash: tftp:' avvia la procedura guidata per trasferire l'immagine del sistema operativo indicando il nome del file sorgente e l'indirizzo IP del server TFTP di destinazione."
    },
    {
        question: "Nei moderni router ISR Cisco (come la serie 4000), come viene gestito il sistema di licenze software basato su un'unica immagine universale (Universal Image)?",
        options: [
            "Ogni funzionalità richiede l'installazione di un hardware fisico differente.",
            "L'immagine universale contiene già tutte le funzionalità software; i vari pacchetti (es. Security, UC, AppX) vengono sbloccati elettronicamente tramite l'installazione di un file di licenza PAK (Product Authorization Key) o via Cisco Smart Licensing.",
            "È necessario scaricare e sovrascrivere un file .bin diverso per ogni licenza acquistata.",
            "Tutte le funzionalità sono gratuite e attive di default senza licenza."
        ],
        correct: 1,
        rationale: "L'Universal Image semplifica il deployment: il file del sistema operativo è unico per tutti. Se l'azienda decide di attivare le funzioni voce (UC) o sicurezza (Security/VPN), basta acquistare e attivare la licenza digitale senza dover aggiornare o cambiare il file IOS."
    },
    {
        question: "Quale comando permette di visualizzare lo stato delle licenze attive, di valutazione o scadute sul router Cisco, indicando quali pacchetti tecnologici sono abilitati?",
        options: [
            "show license",
            "show version",
            "show flash",
            "show tech-support"
        ],
        correct: 0,
        rationale: "Il comando 'show license' (o 'show license feature') elenca dettagliatamente lo stato di attivazione di tutti i moduli tecnologici integrati nell'immagine universale."
    },
    {
        question: "Nel contesto dei codici di stato restituiti da una richiesta REST API, quale codice numerico HTTP indica che la richiesta è andata a buon fine (`OK`) e la risorsa è stata trasmessa correttamente?",
        options: [
            "200",
            "201",
            "400",
            "404"
        ],
        correct: 0,
        rationale: "Il codice '200 OK' è la risposta standard HTTP per confermare il successo di una richiesta. Il codice 201 indica 'Created' (es. risorsa creata tramite POST)."
    },
    {
        question: "Cosa indica a un programmatore o a uno script di automazione la ricezione di un codice di stato HTTP `401 Unauthorized` da parte di un controller SDN aziendale?",
        options: [
            "La risorsa richiesta non esiste sul server.",
            "La richiesta non è stata completata perché mancano le credenziali di autenticazione o quelle fornite (token/password) non sono valide.",
            "Il server è andato in crash interno.",
            "Il controller ha accettato i dati ma rifiuta di applicarli."
        ],
        correct: 1,
        rationale: "Il codice 401 si riferisce specificamente all'autenticazione: indica che l'identità dell'utente o dell'applicazione non è stata verificata (credenziali errate o assenti)."
    },
    {
        question: "Quale codice di stato HTTP viene restituito da un'interfaccia REST API se l'URL digitato nello script non corrisponde a nessuna risorsa esistente sul server (Risorsa non trovata)?",
        options: [
            "400 Bad Request",
            "403 Forbidden",
            "404 Not Found",
            "500 Internal Server Error"
        ],
        correct: 2,
        rationale: "Il codice '404 Not Found' indica che l'endpoint o la risorsa specificata nell'URI della richiesta non esiste sul server web o sul controller."
    },
    {
        question: "Nell'automazione delle infrastrutture IT, quale strumento si basa sul concetto di 'Recipe' (Ricette) e 'Cookbook' (Libri di cucina) scritti in linguaggio Ruby per gestire le configurazioni dei server e degli apparati?",
        options: [
            "Ansible",
            "Chef",
            "Puppet",
            "Terraform"
        ],
        correct: 1,
        rationale: "Chef adotta una metafora culinaria: le singole configurazioni sono 'Recipe' raggruppate in 'Cookbook', gestite da un server centrale in modalità pull."
    },
    {
        question: "Quale protocollo di gestione della rete, evoluzione moderna di SNMP, utilizza il protocollo di trasporto sicuro SSH e si basa sul modello di dati YANG codificato in formato XML per configurare e monitorare i dispositivi?",
        options: [
            "NETCONF",
            "RESTCONF",
            "HTTPs",
            "Telnet extended"
        ],
        correct: 0,
        rationale: "NETCONF (RFC 6241) è stato progettato per superare i limiti strutturali di SNMP, permettendo una gestione robusta e programmabile delle configurazioni tramite XML inviati all'interno di sessioni SSH sicure."
    },
    {
        question: "Quale porta TCP predefinita viene utilizzata dal protocollo NETCONF per stabilire sessioni di comunicazione sicure con gli apparati di rete?",
        options: [
            "22",
            "80",
            "443",
            "830"
        ],
        correct: 3,
        rationale: "La porta ufficiale standard riservata a NETCONF su SSH è la TCP 830. (La porta 22 è invece quella di SSH classico da terminale)."
    },
    {
        question: "Quale caratteristica distingue principalmente il protocollo RESTCONF da NETCONF?",
        options: [
            "RESTCONF è proprietario Cisco, mentre NETCONF è open standard.",
            "RESTCONF è un'estensione più leggera basata sul protocollo HTTP che supporta sia il formato JSON che XML, mappando le operazioni YANG sui metodi HTTP standard (GET, POST, PUT, DELETE).",
            "RESTCONF non supporta la crittografia.",
            "RESTCONF richiede l'installazione di agenti software locali su ogni switch."
        ],
        correct: 1,
        rationale: "RESTCONF è una variante semplificata pensata per gli sviluppatori web: invece di usare SSH e complesse sessioni XML come NETCONF, sfrutta le chiamate HTTP RESTful e permette l'uso del formato JSON, molto più leggero e diffuso."
    },
    {
        question: "Nel contesto dei sistemi informatici aziendali, cosa si intende per 'Virtualizzazione delle funzioni di rete' (NFV - Network Functions Virtualization)?",
        options: [
            "La sostituzione di tutti i cavi in rame con collegamenti virtuali a onde radio.",
            "La scomposizione e l'implementazione di servizi di rete tradizionalmente hardware (come Firewall, Router, Bilanciatori di carico) sotto forma di istanze software eseguite all'interno di macchine virtuali su server standard di mercato.",
            "La disattivazione dei server DNS per sicurezza.",
            "L'uso esclusivo di simulatori come Packet Tracer per la produzione aziendale."
        ],
        correct: 1,
        rationale: "Con la NFV, un'azienda non deve più acquistare costosi apparati hardware dedicati (es. un firewall fisico per ogni filiale): basta installare una macchina virtuale software (es. Cisco ASAv o un firewall virtuale) all'interno di un server posizionato in loco o nel cloud."
    },
    {
        question: "Quale componente di un'architettura Cloud provvede all'allocazione e alla gestione dinamica delle risorse hardware fisiche sottostanti (CPU, RAM, Dischi), isolando logicamente le diverse istanze dei clienti (Tenants)?",
        options: [
            "Hypervisor",
            "Controller SDN",
            "Server Syslog",
            "API Gateway"
        ],
        correct: 0,
        rationale: "L'Hypervisor (come VMware ESXi o KVM) è il motore software fondamentale del cloud: si frappone tra l'hardware fisico e i sistemi operativi virtuali per governare la distribuzione delle risorse in modo sicuro e isolato."
    },
    {
        question: "Quale minaccia informatica sfrutta una debolezza o una falla di programmazione logica all'interno di un software o di un sistema operativo che non è ancora stata scoperta dal produttore e per la quale non esiste ancora alcuna patch di sicurezza?",
        options: [
            "Vulnerability Scan",
            "Attacco Zero-Day",
            "Brute Force attack",
            "Phishing mirato"
        ],
        correct: 1,
        rationale: "Un attacco 'Zero-Day' è estremamente pericoloso perché colpisce una vulnerabilità sconosciuta ai difensori; l'azienda ha letteralmente 'zero giorni' di tempo per prepararsi o installare un aggiornamento prima che l'attacco si verifichi."
    },
    {
        question: "Cosa si intende per 'Social Engineering' (Ingegneria Sociale) nell'ambito della sicurezza delle informazioni?",
        options: [
            "L'uso di script automatici per saturare la CPU dei firewall.",
            "Un insieme di tecniche manipolatorie psicologiche volte a ingannare le persone per spingerle a compiere azioni compromettenti o a rivelare informazioni riservate (come password o codici d'accesso).",
            "La configurazione di filtri di sicurezza sui social network aziendali.",
            "L'analisi statistica dei pacchetti NetFlow."
        ],
        correct: 1,
        rationale: "L'ingegneria sociale non colpisce le falle del software, ma il 'fattore umano' (considerato l'anello debole della catena di sicurezza), sfruttando la fiducia, l'ingenuità o l'autorevolezza percepita per sottrarre dati."
    },
    {
        question: "Quale policy o pratica di sicurezza impone che i dipendenti che lasciano la propria postazione di lavoro debbano bloccare lo schermo del PC e non lasciare alcun documento cartaceo riservato o password scritta su foglietti (Post-it) sulla scrivania?",
        options: [
            "AUP (Acceptable Use Policy)",
            "Politica della scrivania e dello schermo puliti (Clean Desk and Clear Screen Policy)",
            "BYOD Policy",
            "Zero Trust framework"
        ],
        correct: 1,
        rationale: "La Clean Desk Policy riduce il rischio di violazioni della sicurezza fisica, impedendo a visitatori o colleghi malintenzionati di spiare informazioni sensibili lasciate incustodite sulle scrivanie (Shoulder Surfing)."
    },
    {
        question: "In un ambiente wireless centralizzato basato su architettura Cisco Cisco Unified Wireless Network, quale modalità operativa di un Access Point (AP) viene utilizzata per scansionare continuamente lo spettro radio alla ricerca di interferenze, attacchi o AP abusivi (Rogue AP), senza però consentire la connessione dei client?",
        options: [
            "Local Mode",
            "Monitor Mode",
            "FlexConnect Mode",
            "Sniffer Mode"
        ],
        correct: 1,
        rationale: "In 'Monitor Mode', l'AP agisce come un sensore radar dedicato esclusivamente alla sicurezza (WIDS/WIPS): scansiona i canali per intercettare anomalie radio o minacce senza gestire il traffico degli utenti."
    },
    {
        question: "Quale funzionalità permette a un Access Point leggero (Lightweight AP) situato in una filiale remota di continuare a inoltrare localmente il traffico dati degli utenti sulla LAN interna anche qualora si interrompa temporaneamente il collegamento WAN verso il Wireless LAN Controller (WLC) centrale?",
        options: [
            "Local Mode extension",
            "FlexConnect",
            "Bridge Mode mesh",
            "Autonomous fallback"
        ],
        correct: 1,
        rationale: "FlexConnect è una feature vitale per le filiali remote: se il tunnel CAPWAP verso il WLC centrale si interrompe, l'AP non smette di funzionare ma commuta in modalità locale per garantire la continuità operativa dei servizi interni della filiale."
    },
    {
        question: "Quale protocollo di sicurezza wireless, introdotto con WPA3, mitiga gli attacchi di intercettazione passiva dei dati crittografando in modo indipendente ogni singola sessione utente, anche nelle reti Wi-Fi aperte senza password (es. hotel o aeroporti)?",
        options: [
            "OWE (Opportunistic Wireless Encryption)",
            "SAE",
            "TKIP",
            "WEP 2"
        ],
        correct: 0,
        rationale: "OWE (noto anche come Wi-Fi Certified Enhanced Open) risolve il grande problema delle reti Wi-Fi pubbliche aperte. Gli utenti non devono inserire password per connettersi, ma il traffico radio tra il dispositivo e l'AP viene comunque cifrato individualmente, impedendo lo sniffing dei dati in aria."
    },
    {
        question: "Nel contesto dei sistemi operativi e dei log di sicurezza, qual è lo scopo principale dell'utilizzo di un server Syslog centralizzato all'interno di un'infrastruttura di rete?",
        options: [
            "Assegnare indirizzi IP automatici ai router.",
            "Consolidare in un unico archivio sicuro e centralizzato tutti i messaggi di evento e di errore generati dai vari apparati, facilitando il monitoraggio, la correlazione e l'auditing e impedendo che un attaccante cancelli le proprie tracce localmente.",
            "Configurare in modo automatico i parametri delle VLAN sugli switch.",
            "Effettuare il backup periodico dei file d'immagine del sistema operativo."
        ],
        correct: 1,
        rationale: "Centralizzare i log su un server Syslog esterno è un requisito di sicurezza critico: se un hacker compromette un router, la prima cosa che farà sarà cancellare i log locali per non farsi scoprire. Avendo inviato i log a un server esterno in tempo reale, l'amministratore disporrà comunque delle prove dell'intrusione."
    },
    {
        question: "Quale livello di severità (Severity Level) viene associato nei messaggi di Syslog a un evento descritto come 'Warning', che indica una condizione di attenzione per la quale non è richiesto un intervento immediato ma che potrebbe causare problemi futuri?",
        options: [
            "Livello 1",
            "Livello 4",
            "Livello 5",
            "Livello 7"
        ],
        correct: 1,
        rationale: "I messaggi di Warning corrispondono al Livello 4 della scala Syslog. Segnalano anomalie minori o avvisi operativi che meritano di essere esaminati prima che degenerino in guasti reali."
    },
    {
        question: "Quale funzionalità di sicurezza avanzata permette a un amministratore di configurare uno switch Cisco in modo che accetti esclusivamente pacchetti di log-in di amministrazione provenienti da un elenco ristretto e definito di indirizzi IP sicuri?",
        options: [
            "Applicazione di un'ACL (Access Control List) sulle linee VTY tramite il comando 'access-class'.",
            "Configurazione del DHCP Snooping globale.",
            "Abilitazione del protocollo Spanning Tree BPDU Guard.",
            "Uso del costrutto Port Security sticky."
        ],
        correct: 0,
        rationale: "Per proteggere le linee di gestione virtuali (VTY), si crea un'ACL standard contenente gli IP dei computer degli amministratori e la si applica alle linee VTY con il comando 'access-class [Numero] in'. Chiunque provi a collegarsi via SSH da un IP non autorizzato verrà respinto all'istante."
    },
    {
        question: "In OSPF, se un'interfaccia router ha una larghezza di banda reale pari a 10 Gbps (10.000 Mbps) e si utilizza il valore di Reference Bandwidth predefinito di Cisco (100 Mbps), quale sarà il costo calcolato per quel link? Come si corregge questo comportamento?",
        options: [
            "Il costo sarà 0. Si corregge spegnendo l'interfaccia.",
            "Il costo sarà pari a 1, poiché l'algoritmo non prevede valori decimali inferiori a 1. Si corregge modificando la larghezza di banda di riferimento a livello globale con il comando 'auto-cost reference-bandwidth 10000'.",
            "Il costo sarà 10. Si corregge attivando il protocollo RIPv2.",
            "Il costo si calcola in base al numero di interfacce attive sulla stessa scheda."
        ],
        correct: 1,
        rationale: "Poiché il costo minimo OSPF è 1, tutti i link da 100 Mbps in su (1 Gbps, 10 Gbps, ecc.) avranno lo stesso identico costo pari a 1, impedendo a OSPF di scegliere il percorso fisicamente più veloce. Impostando 'auto-cost reference-bandwidth 10000' (o superiore) sul processo OSPF di tutti i router, si ripristina il corretto calcolo proporzionale dei costi."
    },
    {
        question: "Cosa accade se si applica un'ACL su un'interfaccia di un router Cisco e la lista è completamente vuota (non contiene alcuna riga di comando esplicita)?",
        options: [
            "L'interfaccia smette di funzionare e va in stato di errore.",
            "L'ACL non esegue alcun filtraggio e tutto il traffico dati transita liberamente senza alcuna restrizione.",
            "Tutto il traffico dati in transito viene bloccato a causa del deny implicito.",
            "Il router si riavvia automaticamente."
        ],
        correct: 1,
        rationale: "Questo è un comportamento particolare di Cisco IOS: un'ACL vuota applicata a un'interfaccia non ha alcun effetto e permette il passaggio di tutto il traffico (comportamento permit all). Il 'deny all' implicito si attiva soltanto nel momento in cui viene inserita almeno una regola scritta all'interno della lista."
    },
    {
        question: "In una rete aziendale distribuita, quale protocollo viene utilizzato per inoltrare i messaggi di broadcast DHCP dei client (DHCP Discover) situati in una determinata VLAN verso un server DHCP centralizzato situato in una subnet o VLAN differente?",
        options: [
            "Il comando 'ip helper-address' configurato sull'interfaccia Layer 3 (SVI o sotto-interfaccia del router) che agisce da gateway per i client.",
            "Il protocollo Spanning Tree in modalità rapida.",
            "L'attivazione del protocollo DNS dinamico.",
            "L'uso di un tunnel GRE non cifrato."
        ],
        correct: 0,
        rationale: "I router bloccano i broadcast di default. Configurando il comando 'ip helper-address [IP_Server_DHCP]' sull'interfaccia del gateway, il router intercetta i broadcast DHCP Discover degli utenti e li converte in pacchetti Unicast indirizzati direttamente al server DHCP remoto."
    },
    {
        question: "Quale formato di dati viene utilizzato principalmente per scambiare informazioni e configurazioni strutturate all'interno dei messaggi del protocollo NETCONF?",
        options: [
            "JSON",
            "XML (Extensible Markup Language)",
            "YAML",
            "HTML"
        ],
        correct: 1,
        rationale: "Mentre RESTCONF predilige JSON (pur supportando XML), il protocollo NETCONF nativo si basa rigorosamente sull'uso di file e stringhe strutturate in formato XML per qualsiasi operazione di configurazione o monitoraggio."
    },
    {
        question: "Quale tipo di attacco informatico consiste nel posizionare un Access Point abusivo (Rogue AP) all'esterno del perimetro aziendale configurato con lo stesso SSID della rete legittima per spingere i dipendenti a connettervisi involontariamente e rubare i loro dati?",
        options: [
            "Evil Twin Attack",
            "MAC Spoofing wireless",
            "DDoS RF Jamming",
            "WPA Brute Force offline"
        ],
        correct: 0,
        rationale: "Un attacco 'Evil Twin' (gemello cattivo) clona il nome della rete wireless aziendale fidata. I dispositivi degli utenti, vedendo un segnale radio più forte, potrebbero agganciarsi automaticamente ad esso, esponendosi al furto di credenziali tramite tecniche MitM."
    },
    {
        question: "Quale comando permette di verificare l'esatto percorso dei file e la versione del sistema operativo Cisco IOS attualmente caricato nella memoria RAM del router, oltre a mostrare il tempo di attività (Uptime) del dispositivo e la quantità di memoria hardware installata?",
        options: [
            "show version",
            "show running-config",
            "show flash",
            "show ip interface brief"
        ],
        correct: 0,
        rationale: "Il comando 'show version' fornisce l'identikit completo dell'hardware e del software dell'apparato: versione dell'IOS, file di boot, modello del dispositivo, uptime e valore corrente del registro di configurazione."
    }
];



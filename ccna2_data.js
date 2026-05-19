window.ccnaDatabase = window.ccnaDatabase || {};
window.ccnaDatabase.ccna2 = [
        {
            question: "Quale comando permette di creare una VLAN identificata dal numero 10 su uno switch Cisco Catalyst?",
            options: [
                "Switch# vlan 10",
                "Switch(config)# vlan 10",
                "Switch(config-if)# switchport vlan 10",
                "Switch(config)# interface vlan 10"
            ],
            correct: 1,
            rationale: "La creazione globale di una VLAN si effettua in modalità di configurazione globale con il comando 'vlan [ID]'. Il comando 'interface vlan' serve invece a creare la SVI di Layer 3."
        },
        {
            question: "Quale modalità di switchport deve essere configurata sulla porta di uno switch collegata direttamente a un router per trasportare il traffico di più VLAN (Inter-VLAN Routing standard)?",
            options: [
                "Access",
                "Trunk",
                "Dynamic Auto",
                "Dynamic Desirable"
            ],
            correct: 1,
            rationale: "Le porte Trunk (standard IEEE 802.1Q) permettono di far transitare i frame di più VLAN differenti sullo stesso collegamento fisico applicando un tag all'header."
        },
        {
            question: "Che cosa si intende per 'Native VLAN' in un collegamento trunk 802.1Q?",
            options: [
                "La VLAN utilizzata per isolare tutto il traffico di management.",
                "La VLAN a cui appartiene il traffico privo di tag (untagged) che attraversa il trunk.",
                "La VLAN con la priorità Spanning Tree più elevata.",
                "La VLAN di default in cui vengono posizionate tutte le porte d'accesso."
            ],
            correct: 1,
            rationale: "La Native VLAN serve a gestire il traffico che arriva sul trunk senza un tag esplicito. Per sicurezza, entrambi i lati del trunk devono avere la stessa Native VLAN configurata."
        },
        {
            question: "Quale protocollo open standard viene utilizzato per prevenire loop logici all'interno di topologie di rete Layer 2 ridondate?",
            options: [
                "OSPF",
                "STP (Spanning Tree Protocol)",
                "LLDP",
                "LACP"
            ],
            correct: 1,
            rationale: "STP (IEEE 802.1D o 802.1w) calcola un percorso privo di loop mettendo in stato di blocking le porte ridondanti, pronte a riattivarsi in caso di guasto."
        },
        {
            question: "Qual è lo stato di una porta Spanning Tree (STP) standard che riceve ed elabora le BPDU, apprende gli indirizzi MAC ma non inoltra ancora i frame dati dell'utente?",
            options: [
                "Blocking",
                "Listening",
                "Learning",
                "Forwarding"
            ],
            correct: 2,
            rationale: "Durante lo stato di Learning, la porta popola la CAM table esaminando i MAC sorgente dei frame in transito, ma non esegue ancora il forwarding dei dati per prevenire loop temporanei."
        },
        {
            question: "Quale comando globale deve essere digitato su un router Cisco per abilitare l'inoltro dei pacchetti basato sul protocollo IPv6?",
            options: [
                "Router(config)# ipv6 address",
                "Router(config)# ipv6 unicast-routing",
                "Router(config)# ipv6 routing enable",
                "Router# ipv6 cef"
            ],
            correct: 1,
            rationale: "Senza il comando 'ipv6 unicast-routing', il router si comporta come un semplice host IPv6 e non instrada i pacchetti tra le sue interfacce."
        },
        {
            question: "Un amministratore di rete vuole configurare l'Inter-VLAN Routing con il metodo 'Router-on-a-Stick'. Come devono essere configurate le interfacce del router?",
            options: [
                "Si assegna un'interfaccia fisica separata per ogni VLAN.",
                "Si divide un'interfaccia fisica in sotto-interfacce logiche (subinterfaces), ciascuna con incapsulamento 802.1Q e un IP della rispettiva sottorete.",
                "Si configurano le porte del router in modalità trunk dinamico.",
                "Si collegano le interfacce del router a un Hub centrale."
            ],
            correct: 1,
            rationale: "Il Router-on-a-Stick usa una sola interfaccia fisica divisa in sotto-interfacce logiche (es. g0/0.10, g0/0.20) per gestire più VLAN risparmiando porte sul router."
        },
        {
            question: "Quale comando permette di attivare la funzionalità di Port Security su una specifica interfaccia d'accesso di uno switch Cisco?",
            options: [
                "Switch(config-if)# port-security enable",
                "Switch(config-if)# switchport port-security",
                "Switch(config-if)# switchport mode port-security",
                "Switch(config)# ip port-security"
            ],
            correct: 1,
            rationale: "Il comando corretto è 'switchport port-security'. Nota bene: l'interfaccia deve essere preventivamente impostata in modalità d'accesso statica ('switchport mode access')."
        },
        {
            question: "Quale indirizzo IP viene utilizzato in una rotta statica flottante (Floating Static Route) per fare in modo che essa agisca solo come percorso di backup?",
            options: [
                "Un indirizzo IP di Next-Hop non raggiungibile.",
                "Un valore di Distanza Amministrativa (AD) superiore rispetto a quello della rotta principale.",
                "Una metrica di costo basata sulla larghezza di banda inferiore.",
                "Una subnet mask più corta."
            ],
            correct: 1,
            rationale: "Le rotte flottanti sfruttano una Distanza Amministrativa configurata manualmente più alta (es. 50 o 90) rispetto alla rotta primaria (AD di default = 1), entrando in tabella solo se la primaria fallisce."
        },
        {
            question: "Quale comando viene configurato sotto l'interfaccia di un router per trasformarlo in un DHCP Relay Agent, permettendo di inoltrare le richieste broadcast DHCP dei client verso un server DHCP situato in un'altra sottorete?",
            options: [
                "Router(config-if)# dhcp server ip_address",
                "Router(config-if)# ip helper-address ip_address",
                "Router(config-if)# ip dhcp relay",
                "Router(config)# service dhcp"
            ],
            correct: 1,
            rationale: "Il comando 'ip helper-address' intercetta i broadcast UDP locali (incluso il DHCP sulla porta 67) e li converte in messaggi unicast indirizzati direttamente al server DHCP."
        },
        {
            question: "Quale protocollo proprietario Cisco permette di negoziare automaticamente la creazione di un trunk tra due switch collegati direttamente?",
            options: [
                "VTP",
                "DTP (Dynamic Trunking Protocol)",
                "LACP",
                "STP"
            ],
            correct: 1,
            rationale: "DTP gestisce l'autonegoziazione dello stato della porta (access o trunk) tra due switch Cisco vicini."
        },
        {
            question: "Che cosa succede se una porta protetta da Port Security rileva una violazione e la modalità di violazione è impostata sul valore di default 'Shutdown'?",
            options: [
                "La porta continua a funzionare ma scarta i frame incriminati inviando un log.",
                "La porta viene immediatamente disattivata e posta nello stato logico 'err-disabled', spegnendo il LED fisico.",
                "La porta scarta i frame senza registrare alcuna anomalia.",
                "Lo switch si riavvia automaticamente."
            ],
            correct: 1,
            rationale: "La modalità 'shutdown' blocca completamente la porta portandola in 'err-disabled'. Per riattivarla l'amministratore deve digitare manualmente 'shutdown' seguito da 'no shutdown' sull'interfaccia."
        },
        {
            question: "Qual è il valore di Distanza Amministrativa (Administrative Distance) predefinito associato a una rotta statica in un sistema Cisco IOS?",
            options: [
                "0",
                "1",
                "90",
                "110"
            ],
            correct: 1,
            rationale: "Le rotte statiche hanno un'AD pari a 1, il che le rende estremamente affidabili e prioritarie rispetto a qualsiasi protocollo di routing dinamico (es. OSPF ha 110)."
        },
        {
            question: "Quale tipologia di switch esegue l'inoltro Inter-VLAN Routing sfruttando le interfacce logiche SVI (Switched Virtual Interface) senza richiedere un router esterno?",
            options: [
                "Switch Layer 2 standard",
                "Switch Layer 3 (o Switch Multilivello)",
                "Hub intelligente",
                "Wireless Access Point"
            ],
            correct: 1,
            rationale: "Gli switch Layer 3 possiedono la capacità hardware di instradare i pacchetti IP internamente associando indirizzi IP di gateway direttamente alle interfacce virtuali delle VLAN (SVI)."
        },
        {
            question: "Nel protocollo Rapid STP (RSTP - 802.1w), quale ruolo assume una porta che offre un percorso alternativo verso il Root Bridge, agendo come backup immediato della Root Port?",
            options: [
                "Designated Port",
                "Alternate Port",
                "Backup Port",
                "Disabled Port"
            ],
            correct: 1,
            rationale: "La porta Alternate in RSTP rimane in uno stato di attesa attiva e sostituisce istantaneamente la Root Port in caso di guasto del link principale, velocizzando drasticamente la convergenza."
        },
        {
            question: "Quale comando permette di visualizzare lo stato operativo di tutte le VLAN configurate su uno switch Cisco, mostrando anche le porte fisiche associate a ciascuna?",
            options: [
                "show run vlan",
                "show vlan brief",
                "show interfaces switchport",
                "show ip vlan"
            ],
            correct: 1,
            rationale: "Il comando 'show vlan brief' fornisce una tabella sintetica ed esaustiva contenente ID, nome, stato e allocazione delle porte per ogni VLAN attiva nello switch."
        },
        {
            question: "Quale vulnerabilità di sicurezza sfrutta la tecnica del 'VLAN Hopping' basata sul double-tagging?",
            options: [
                "La saturazione della memoria CAM.",
                "L'inserimento di un doppio tag 802.1Q in un frame per ingannare uno switch e fargli inoltrare il traffico verso una VLAN diversa senza passare da un router.",
                "L'invio di falsi messaggi DHCP Offer.",
                "La clonazione dell'indirizzo MAC del gateway."
            ],
            correct: 1,
            rationale: "Il double-tagging sfrutta il meccanismo con cui lo switch rimuove il primo tag (della Native VLAN) lasciando il secondo tag esposto, ingannando lo switch successivo che invia il frame alla VLAN target."
        },
        {
            question: "Quale comando di configurazione dell'interfaccia permette di impostare l'indirizzamento MAC in modalità 'Sticky' per la Port Security?",
            options: [
                "Switch(config-if)# port-security mac-address permanent",
                "Switch(config-if)# switchport port-security mac-address sticky",
                "Switch(config-if)# switchport sticky-mac",
                "Switch(config-if)# security mac sticky"
            ],
            correct: 1,
            rationale: "La modalità 'sticky' permette allo switch di apprendere dinamicamente i MAC connessi e scriverli direttamente nella running-config come record statici protetti."
        },
        {
            question: "Quale comando permette di definire una rotta statica standard verso la rete 172.16.1.0/24 utilizzando l'indirizzo Next-Hop 10.0.0.2?",
            options: [
                "Router(config)# ip route 172.16.1.0 10.0.0.2",
                "Router(config)# ip route 172.16.1.0 255.255.255.0 10.0.0.2",
                "Router(config)# ip route 10.0.0.2 172.16.1.0 255.255.255.0",
                "Router(config)# route add 172.16.1.0 mask 255.255.255.0 10.0.0.2"
            ],
            correct: 1,
            rationale: "La sintassi corretta del comando 'ip route' richiede: [Rete di destinazione] [Maschera di sottorete] [IP del Next-Hop o interfaccia di uscita]."
        },
        {
            question: "Che cosa si intende per 'Distanza Amministrativa' (Administrative Distance) nel contesto del routing IP?",
            options: [
                "Il tempo espresso in millisecondi impiegato da un pacchetto per raggiungere la destinazione.",
                "Il grado di affidabilità e preferenza della sorgente di routing. Più il valore è basso, più la rotta è considerata affidabile.",
                "Il numero di router fisici presenti lungo un determinato percorso.",
                "La metrica utilizzata dall'algoritmo OSPF per calcolare la banda."
            ],
            correct: 1,
            rationale: "La Distanza Amministrativa serve al router per decidere quale rotta inserire in tabella quando più sorgenti (statiche, OSPF, RIP) propongono un percorso per la stessa identica destinazione."
        },
        {
            question: "Quale intervallo di ID identifica le VLAN definite 'Normal Range' destinate alle reti aziendali di piccole e medie dimensioni e memorizzate nel file vlan.dat?",
            options: [
                "1 a 1001",
                "1 a 4094",
                "1006 a 4094",
                "2000 a 3000"
            ],
            correct: 0,
            rationale: "Le VLAN ad intervallo normale vanno da 1 a 1005 (con 1002-1005 riservate a usi legacy token ring). Le VLAN da 1006 a 4094 sono classificate come 'Extended Range'."
        },
        {
            question: "Quale comando permette di forzare una porta di uno switch a non avviare mai negoziazioni DTP, disattivando gli annunci dinamici verso il nodo opposto?",
            options: [
                "Switch(config-if)# switchport mode access",
                "Switch(config-if)# switchport nonegotiate",
                "Switch(config-if)# no dtp enable",
                "Switch(config-if)# switchport trunk local"
            ],
            correct: 1,
            rationale: "Il comando 'switchport nonegotiate' blocca l'invio dei frame DTP. È una pratica di sicurezza fondamentale per evitare manipolazioni dei trunk."
        },
        {
            question: "Nel calcolo del Bridge ID (BID) all'interno dello Spanning Tree standard, quali componenti strutturali formano questo identificativo?",
            options: [
                "Solo l'indirizzo MAC dello switch.",
                "La priorità del bridge (Bridge Priority) e l'indirizzo MAC dello switch.",
                "L'indirizzo IP del gateway e l'ID della VLAN.",
                "La velocità massima dell'interfaccia principale."
            ],
            correct: 1,
            rationale: "Il BID è composto da 2 byte di priorità (che includono il System ID Extension nelle versioni PVST+) e dai 6 byte del MAC address dello switch."
        },
        {
            question: "Qual è il valore di priorità predefinito (Default Bridge Priority) assegnato a uno switch Cisco che esegue lo Spanning Tree?",
            options: [
                "1",
                "4096",
                "32768",
                "65535"
            ],
            correct: 2,
            rationale: "Il valore di priorità standard di default è 32768. Può essere modificato solo a blocchi multipli di 4096 per forzare l'elezione del Root Bridge."
        },
        {
            question: "Quale tipologia di rotta statica punta esplicitamente a una rete di destinazione esterna inserendo come parametro di uscita unicamente l'interfaccia fisica locale (es. Serial 0/0/0)?",
            options: [
                "Rotta statica direttamente connessa (Directly Connected)",
                "Rotta statica completamente specificata (Fully Specified)",
                "Rotta statica ricorsiva",
                "Rotta statica galleggiante"
            ],
            correct: 0,
            rationale: "Una rotta statica configurata specificando solo l'interfaccia di uscita locale viene considerata dal router come 'direttamente connessa' a quell'interfaccia."
        },
        {
            question: "In uno switch multilivello (Layer 3), quale comando globale deve essere inserito prima di poter configurare un indirizzo IP su una porta fisica, trasformandola da porta L2 a porta instradata (Routed Port)?",
            options: [
                "Switch(config-if)# switchport mode layer3",
                "Switch(config-if)# no switchport",
                "Switch(config-if)# ip routing",
                "Switch(config-if)# interface routed"
            ],
            correct: 1,
            rationale: "Il comando 'no switchport' disattiva le logiche di switching di Layer 2 sulla porta fisica, consentendo di trattarla esattamente come la porta di un router a cui assegnare un IP."
        },
        {
            question: "Quale messaggio del protocollo DHCP viene inviato in broadcast da un client per richiedere formalmente i parametri di rete che gli sono stati offerti da un server?",
            options: [
                "DHCP Discover",
                "DHCP Offer",
                "DHCP Request",
                "DHCP Ack"
            ],
            correct: 2,
            rationale: "La sequenza corretta (DORA) prevede che il client invii un DHCP Request in broadcast per confermare l'accettazione dell'offerta ricevuta dal server."
        },
        {
            question: "Quale tecnica di mitigazione degli attacchi Spanning Tree impedisce a switch non autorizzati o rogue inseriti nella LAN di diventare Root Bridge, bloccando la porta se riceve BPDU superiori?",
            options: [
                "PortFast",
                "BPDU Guard",
                "Root Guard",
                "Loop Guard"
            ],
            correct: 2,
            rationale: "Root Guard posiziona temporaneamente la porta in uno stato di 'root-inconsistent' se rileva BPDU che tentano di rubare il ruolo di Root Bridge al dispositivo legittimo."
        },
        {
            question: "Quale comando permette di esaminare i dettagli operativi relativi alle impostazioni di sicurezza delle porte (Port Security) attive sullo switch?",
            options: [
                "show switchport security",
                "show port-security",
                "show mac-address-table security",
                "show ip security status"
            ],
            correct: 1,
            rationale: "Il comando 'show port-security' elenca le interfacce con la protezione attiva, il numero massimo di MAC concessi, i MAC correnti e i contatori di violazione."
        },
        {
            question: "Cosa si intende per 'Rete logica non contigua' nel contesto della progettazione del routing?",
            options: [
                "Una rete interrotta da un firewall di terze parti.",
                "Una situazione in cui una rete principale classificata (Classful) viene divisa in sottoreti separate fisicamente da una rete principale differente.",
                "Una rete che utilizza solo indirizzamento IPv6.",
                "Una LAN priva di switch centrali."
            ],
            correct: 1,
            rationale: "Le reti non contigue creavano forti problemi ai vecchi protocolli classful (come RIPv1) perché i router riassumevano i percorsi nascondendo le sottoreti interne."
        },
        {
            question: "Quale tipologia di attacco alla sicurezza della LAN prevede il posizionamento di un server rogue che distribuisce gateway falsi e DNS malevoli ai client ignari?",
            options: [
                "MAC Spoofing",
                "DHCP Spoofing",
                "ARP Poisoning",
                "VLAN Hopping"
            ],
            correct: 1,
            rationale: "Nel DHCP Spoofing un attaccante risponde alle richieste DHCP Discover fornendo configurazioni alterate per deviare il traffico degli utenti verso un server proxy maligno."
        },
        {
            question: "Quale funzione dello switch permette di ispezionare i pacchetti DHCP in transito per creare un database di associazioni sicure (Binding Table) e bloccare attacchi DHCP malevoli?",
            options: [
                "Dynamic ARP Inspection (DAI)",
                "DHCP Snooping",
                "IP Source Guard",
                "Port Security"
            ],
            correct: 1,
            rationale: "DHCP Snooping distingue le interfacce in fidate (Trusted) e non fidate (Untrusted), analizzando il traffico di queste ultime per impedire la distribuzione di parametri IP abusivi."
        },
        {
            question: "Quale comando permette di rimuovere permanentemente la VLAN 20 dal database di uno switch Cisco?",
            options: [
                "Switch(config)# remove vlan 20",
                "Switch(config)# no vlan 20",
                "Switch(config-if)# clear vlan 20",
                "Switch# delete vlan 20"
            ],
            correct: 1,
            rationale: "L'eliminazione di una VLAN si effettua in modalità di configurazione globale anteponendo la negazione 'no' al comando di creazione, ossia 'no vlan 20'."
        },
        {
            question: "In una topologia Spanning Tree, quale switch viene eletto come punto di riferimento logico centrale per l'intera rete e possiede tutte le porte in stato di Designated/Forwarding?",
            options: [
                "Backup Bridge",
                "Root Bridge",
                "Edge Switch",
                "Gateway Switch"
            ],
            correct: 1,
            rationale: "Il Root Bridge è lo switch con il Bridge ID più basso. Diventa il centro della topologia ad albero e non ha alcuna porta bloccata."
        },
        {
            question: "Qual è il costo di default assegnato dallo Spanning Tree standard (IEEE 802.1D) a un link che opera alla velocità di 1 Gbps (Gigabit Ethernet)?",
            options: [
                "100",
                "19",
                "4",
                "2"
            ],
            correct: 2,
            rationale: "Nelle metriche standard di STP, un link a 10 Mbps ha costo 100, a 100 Mbps ha costo 19, a 1 Gbps ha costo 4 e a 10 Gbps ha costo 2."
        },
        {
            question: "Quale tecnologia permette di raggruppare più collegamenti fisici Ethernet paralleli tra due switch in un unico canale logico per aumentare la banda e garantire ridondanza senza blocchi STP?",
            options: [
                "VLAN Trunking",
                "EtherChannel",
                "Spanning Tree Fast",
                "Multi-Layer Switching"
            ],
            correct: 1,
            rationale: "EtherChannel aggrega fino a 8 link fisici stabili in un'unica interfaccia logica (Port-Channel), eludendo i blocchi dello Spanning Tree sul singolo cavo."
        },
        {
            question: "Quale protocollo open-standard viene comunemente negoziato per stabilire e gestire i fasci EtherChannel in modo dinamico?",
            options: [
                "PAgP (Port Aggregation Protocol)",
                "LACP (Link Aggregation Control Protocol)",
                "DTP",
                "802.1Q"
            ],
            correct: 1,
            rationale: "LACP è lo standard di settore (IEEE 802.3ad) aperto a tutti i vendor, mentre PAgP è il protocollo proprietario di Cisco."
        },
        {
            question: "Quale comando permette di configurare una rotta statica riassuntiva (Summary Route) per accorpare le reti 192.168.0.0/24, 192.168.1.0/24, 192.168.2.0/24 e 192.168.3.0/24 usando il Next-Hop 10.0.0.2?",
            options: [
                "Router(config)# ip route 192.168.0.0 255.255.255.0 10.0.0.2",
                "Router(config)# ip route 192.168.0.0 255.255.252.0 10.0.0.2",
                "Router(config)# ip route 192.168.0.0 255.255.248.0 10.0.0.2",
                "Router(config)# ip route 192.168.0.0 255.255.255.192 10.0.0.2"
            ],
            correct: 1,
            rationale: "Le 4 reti condividono i primi 22 bit. La maschera di riassunto (supernetting) diventa /22, ovvero 255.255.252.0."
        },
        {
            question: "Cosa si intende per 'Esplorazione ricorsiva' (Recursive Lookup) all'interno delle operazioni di routing?",
            options: [
                "Un loop infinito causato da metriche errate.",
                "Il processo in cui il router deve consultare la tabella di routing più volte per trovare l'interfaccia di uscita associata all'IP del Next-Hop.",
                "La scansione automatica dei server DNS.",
                "L'eliminazione dei pacchetti con TTL scaduto."
            ],
            correct: 1,
            rationale: "Se una rotta indica solo l'IP del Next-Hop, il router deve fare un secondo ciclo di ricerca interno alla tabella per capire su quale interfaccia fisica risiede quell'IP."
        },
        {
            question: "Quale comando permette di verificare la corretta associazione e lo stato operativo dei canali logici EtherChannel creati sullo switch?",
            options: [
                "show etherchannel summary",
                "show interfaces port-channel",
                "show lacp neighbors",
                "show ip etherchannel"
            ],
            correct: 0,
            rationale: "Il comando 'show etherchannel summary' è fondamentale: mostra l'elenco dei Port-Channel, i protocolli usati (LACP/PAgP) e i flag di stato delle porte (es. P = in port-channel)."
        },
        {
            question: "In una configurazione EtherChannel tramite protocollo LACP, quale modalità forza la porta ad avviare attivamente la negoziazione con lo switch remoto?",
            options: [
                "Desirable",
                "Auto",
                "Active",
                "Passive"
            ],
            correct: 2,
            rationale: "In LACP si usano le modalità 'Active' (avvia la trattativa) e 'Passive' (risponde solo se interpellato). 'Desirable' e 'Auto' appartengono a PAgP."
        },
        {
            question: "Quale pacchetto DHCP viene trasmesso in modalità Unicast dal server verso il client per finalizzare l'assegnazione dell'indirizzo IP, confermando formalmente i parametri?",
            options: [
                "DHCP Discover",
                "DHCP Offer",
                "DHCP Request",
                "DHCP Ack"
            ],
            correct: 3,
            rationale: "Il pacchetto DHCP Ack chiude lo scambio DORA confermando formalmente l'assegnazione e i tempi di lease al dispositivo richiedente."
        },
        {
            question: "Quale caratteristica descrive il comportamento di un attacco di 'ARP Poisoning' (o ARP Spoofing)?",
            options: [
                "La saturazione della banda tramite pacchetti ICMP.",
                "L'invio di messaggi ARP Reply falsificati per associare il MAC address dell'attaccante all'indirizzo IP del gateway legittimo.",
                "Il blocco fisico delle porte dello switch.",
                "La cancellazione del file startup-config."
            ],
            correct: 1,
            rationale: "Avvelenando la cache ARP delle vittime, l'attaccante si interpone in mezzo alle conversazioni (Man-in-the-Middle), intercettando tutto il traffico diretto al gateway."
        },
        {
            question: "Quale tecnologia di sicurezza della LAN sfrutta la tabella di binding creata dal DHCP Snooping per intercettare e scartare le risposte ARP fasulle non verificate?",
            options: [
                "Port Security",
                "Dynamic ARP Inspection (DAI)",
                "BPDU Filter",
                "Root Guard"
            ],
            correct: 1,
            rationale: "DAI controlla la validità dei pacchetti ARP confrontandoli con il database fidato del DHCP Snooping per stroncare sul nascere gli attacchi di ARP Poisoning."
        },
        {
            question: "Quale comando permette di visualizzare in tempo reale la tabella dei binding IP-MAC compilata dallo switch tramite la funzione di DHCP Snooping?",
            options: [
                "show dhcp snooping binding",
                "show ip dhcp snooping database",
                "show port-security address",
                "show mac-address-table secure"
            ],
            correct: 0,
            rationale: "Il comando 'show dhcp snooping binding' mostra l'elenco degli indirizzi IP assegnati dinamicamente accoppiati ai rispettivi MAC, interfacce fisiche e tempo di lease."
        },
        {
            question: "Nello Spanning Tree versione PVST+ (Per-VLAN Spanning Tree), quale valore aggiuntivo viene inserito all'interno del Bridge Priority per identificare la VLAN associata al calcolo?",
            options: [
                "Extended System ID (ID della VLAN)",
                "MAC Address supplementare",
                "Port Cost incrementale",
                "Hop Count"
            ],
            correct: 0,
            rationale: "PVST+ scorpora i 16 bit della priorità dedicando 12 bit all'Extended System ID per poter inserire il numero della VLAN, consentendo un'istanza STP indipendente per ogni singola VLAN."
        },
        {
            question: "Quale stato delle porte introdotto dallo Spanning Tree tradizionale viene completamente rimosso all'interno dello standard Rapid STP (802.1w)?",
            options: [
                "Forwarding",
                "Learning",
                "Listening",
                "Discarding"
            ],
            correct: 2,
            rationale: "RSTP unifica gli stati di Blocking, Listening e Disabled in un unico stato chiamato 'Discarding', riducendo le transizioni e velocizzando la convergenza."
        },
        {
            question: "Quale comando permette di impostare globalmente la priorità Spanning Tree di uno switch per la VLAN 10 al valore più basso possibile tramite macro, assicurando l'elezione a Root Bridge?",
            options: [
                "Switch(config)# spanning-tree vlan 10 priority 0",
                "Switch(config)# spanning-tree vlan 10 root primary",
                "Switch(config)# spanning-tree root super vlan 10",
                "Switch(config-if)# spanning-tree root"
            ],
            correct: 1,
            rationale: "Il comando 'spanning-tree vlan 10 root primary' imposta automaticamente la priorità dello switch a 24576 (o inferiore a quella del Root Bridge corrente) per forzarne l'elezione."
        },
        {
            question: "Cosa si intende per 'Asimmetria dei percorsi' (Asymmetric Routing) nel networking?",
            options: [
                "Una configurazione in cui i cavi di rete hanno lunghezze diverse.",
                "Uno scenario in cui i pacchetti dati seguono una determinata sequenza di router per andare dall'host A all'host B, ma seguono una strada differente per il ritorno da B ad A.",
                "Un errore software che disattiva il protocollo OSPF.",
                "Un difetto dell'algoritmo Spanning Tree."
            ],
            correct: 1,
            rationale: "L'asymmetric routing è comune nelle grandi reti internet ridondate. Non è un errore, ma può complicare l'analisi del traffico e la gestione dei firewall stateful."
        },
        {
            question: "Quale comando permette di verificare la tabella di routing completa di un dispositivo Cisco IOS per analizzare le rotte statiche e dinamiche attive?",
            options: [
                "show ip route",
                "show routing-table",
                "show ip interfaces",
                "show static routes"
            ],
            correct: 0,
            rationale: "Il comando 'show ip route' è lo strumento principe per ispezionare l'architettura logica dei percorsi appresi dal router."
        },
// --- CCNA 2: BLOCCO 2 DI 3 (DOMANDE 51-100) ---
        {
            question: "Quale tipo di pacchetto OSPFv2 viene utilizzato da un router per inviare aggiornamenti di routing espliciti, contenenti i Link-State Advertisements (LSA)?",
            options: [
                "Tipo 1: Hello Packet",
                "Tipo 2: Database Description (DBD)",
                "Tipo 3: Link-State Request (LSR)",
                "Tipo 4: Link-State Update (LSU)"
            ],
            correct: 3,
            rationale: "I pacchetti LSU (Link-State Update) trasportano al loro interno uno o più messaggi LSA, responsabili della notifica dei mutamenti topologici ai router vicini."
        },
        {
            question: "In una rete multi-accesso OSPF (come una LAN Ethernet), quale router assume il compito di raccogliere e ridistribuire gli aggiornamenti di routing a tutti gli altri router dell'area?",
            options: [
                "BDR (Backup Designated Router)",
                "DR (Designated Router)",
                "DROther",
                "ASBR"
            ],
            correct: 1,
            rationale: "Il DR (Designated Router) centralizza lo scambio delle informazioni topologiche su segmenti multi-accesso per ottimizzare l'uso della banda e ridurre le adiacenze complessive."
        },
        {
            question: "Quale parametro predefinito viene analizzato in via principale per determinare l'elezione del DR e del BDR in un segmento OSPFv2, prima di confrontare il Router ID?",
            options: [
                "La velocità dell'interfaccia fisica",
                "La priorità dell'interfaccia OSPF (OSPF Interface Priority)",
                "La quantità di RAM libera sul router",
                "L'indirizzo IP più basso"
            ],
            correct: 1,
            rationale: "L'elezione si basa innanzitutto sulla priorità dell'interfaccia (valore di default = 1). Il router con la priorità più alta diventa DR. Impostando la priorità a 0, un router viene escluso dall'elezione."
        },
        {
            question: "Quale indirizzo IPv4 multicast viene utilizzato da OSPFv2 per inviare pacchetti Hello standard a tutti i router OSPF presenti sullo stesso link?",
            options: [
                "224.0.0.1",
                "224.0.0.5",
                "224.0.0.6",
                "224.0.0.9"
            ],
            correct: 1,
            rationale: "L'indirizzo 224.0.0.5 raggiunge indistintamente tutti i router OSPF (All OSPF Routers), mentre l'indirizzo 224.0.0.6 è destinato esclusivamente ai nodi DR e BDR (All DRouters)."
        },
        {
            question: "Che cosa succede se un router OSPF non riceve un pacchetto Hello da un vicino entro lo scadere del timer 'Dead Interval'?",
            options: [
                "Il router riduce semplicemente la metrica verso quel vicino.",
                "Il router dichiara l'adiacenza interrotta, rimuove quel vicino dal database (LSDB) e ricalcola le rotte.",
                "Il router invia un messaggio ping continuo.",
                "Il router si riavvia automaticamente."
            ],
            correct: 1,
            rationale: "Il Dead Interval (di norma pari a 4 volte l'Hello Interval) determina la perdita dell'adiacenza. Il router cancella i percorsi associati e notifica la rete con un nuovo aggiornamento topologico."
        },
        {
            question: "Quale comando permette di verificare l'avvenuta creazione delle adiacenze OSPF, visualizzando lo stato operativo dei vicini (es. FULL/DR o FULL/BDR)?",
            options: [
                "show ip route ospf",
                "show ip ospf neighbor",
                "show ip ospf database",
                "show ip ospf interface"
            ],
            correct: 1,
            rationale: "Il comando 'show ip ospf neighbor' è fondamentale per diagnosticare lo stato delle relazioni di vicinato e verificare che la sincronizzazione sia completata (stato FULL)."
        },
        {
            question: "Qual è il valore di Distanza Amministrativa (Administrative Distance) assegnato di default alle rotte apprese tramite il protocollo OSPF?",
            options: [
                "90",
                "110",
                "120",
                "170"
            ],
            correct: 1,
            rationale: "OSPF ha un'AD di default pari a 110. Questo lo colloca in ordine di preferenza dopo il routing statico (1) e il protocollo EIGRP (90), ma prima di RIP (120)."
        },
        {
            question: "Quale algoritmo matematico viene eseguito dal protocollo OSPF per determinare l'albero dei percorsi ottimali privi di loop verso ogni sottorete di destinazione?",
            options: [
                "Algoritmo Bellman-Ford",
                "Algoritmo DUAL (Diffusing Update Algorithm)",
                "Algoritmo di Dijkstra (Shortest Path First - SPF)",
                "Algoritmo Spanning Tree"
            ],
            correct: 2,
            rationale: "OSPF si basa sull'algoritmo di Dijkstra (SPF) per calcolare l'itinerario a costo minimo basandosi sulle informazioni archiviate nel database dei link-state."
        },
        {
            question: "Quale parametro costituisce la metrica ufficiale utilizzata da OSPF per valutare la convenienza di un determinato percorso?",
            options: [
                "Hop Count (Conteggio dei passaggi)",
                "Cost (Costo, calcolato inversamente rispetto alla larghezza di banda dell'interfaccia)",
                "Delay (Ritardo complessivo della linea)",
                "Affidabilità del mezzo trasmissivo"
            ],
            correct: 1,
            rationale: "La metrica di OSPF è il Costo ($10^8 / \\text{larghezza di banda in bps}$). Questo significa che linee più veloci (es. fibra o Gigabit) avranno un costo inferiore e quindi preferibile."
        },
        {
            question: "Quale comando di configurazione del protocollo OSPF forza l'attivazione immediata di un Router ID specifico, ignorando le interfacce fisiche o di loopback?",
            options: [
                "Router(config-router)# router-id 1.1.1.1",
                "Router(config)# ip ospf router-id 1.1.1.1",
                "Router(config-if)# ip ospf id 1.1.1.1",
                "Router# set ospf id 1.1.1.1"
            ],
            correct: 0,
            rationale: "All'interno del sotto-menu del processo OSPF, il comando 'router-id [indirizzo_IP]' assegna in modo statico e definitivo il nome logico del router per il protocollo."
        },
        {
            question: "In un'architettura di rete Wireless LAN (WLAN) aziendale, quale dispositivo centrale centralizza la gestione, la configurazione e le politiche di sicurezza di molteplici Access Point leggeri (LAP)?",
            options: [
                "Wireless Bridge",
                "WLC (Wireless LAN Controller)",
                "Autonomous Access Point",
                "PoE Switch"
            ],
            correct: 1,
            rationale: "Il WLC centralizza il controllo del sistema wireless, sollevando i singoli Access Point leggeri dall'onere della configurazione manuale singola."
        },
        {
            question: "Quale protocollo di incapsulamento e tunneling permette la comunicazione stabile e lo scambio di dati di controllo e traffico tra un WLC e un Lightweight Access Point (LAP)?",
            options: [
                "GRE",
                "CAPWAP (Control and Provisioning of Wireless Access Points)",
                "IPsec",
                "802.1Q"
            ],
            correct: 1,
            rationale: "CAPWAP crea canali di tunneling sicuri e logici su reti IP per veicolare separatamente il traffico di management e quello degli utenti tra LAP e controllore centralizzato."
        },
        {
            question: "Quale tipologia di attacco wireless consiste nell'installazione di un Access Point non autorizzato collegato di nascosto alla rete aziendale per intercettare le credenziali degli utenti?",
            options: [
                "Denial of Service (DoS)",
                "Rogue Access Point",
                "IP Spoofing",
                "Man-in-the-Middle da remoto"
            ],
            correct: 1,
            rationale: "Un Rogue AP è un punto di accesso inserito senza l'approvazione del team IT, che spalanca un varco d'accesso non protetto all'infrastruttura di rete."
        },
        {
            question: "Quale meccanismo di sicurezza introdotto con lo standard WPA3 migliora la protezione contro gli attacchi di brute-force offline rispetto al vecchio metodo PSK di WPA2?",
            options: [
                "TKIP encryption",
                "SAE (Simultaneous Authentication of Equals)",
                "WEP Key rotation",
                "MD5 hashing automatico"
            ],
            correct: 1,
            rationale: "SAE sostituisce il protocollo di scambio delle chiavi PSK vulnerabile ai dizionari offline, garantendo una protezione robusta anche in presenza di password deboli."
        },
        {
            question: "Quale comando permette di definire una rotta statica di default IPv6 che inoltra tutto il traffico non identificato verso l'indirizzo Next-Hop 2001:db8:acad:1::1?",
            options: [
                "Router(config)# ipv6 route ::/0 2001:db8:acad:1::1",
                "Router(config)# ipv6 route 2001:db8:acad:1::1 ::/0",
                "Router(config)# ip route ::/0 2001:db8:acad:1::1",
                "Router(config)# ipv6 gateway 2001:db8:acad:1::1"
            ],
            correct: 0,
            rationale: "La rotta di default in IPv6 si scrive esprimendo il prefisso nullo '::/0', seguito dal corretto indirizzo del Next-Hop."
        },
        {
            question: "Quale comando permette di forzare una determinata interfaccia di un router (es. quella LAN) a non inviare pacchetti OSPF verso gli host, pur continuando a pubblicare la rete nel database?",
            options: [
                "Router(config-router)# block ospf interface",
                "Router(config-router)# passive-interface GigabitEthernet 0/0",
                "Router(config-if)# no ip ospf advertisement",
                "Router(config)# ip ospf passive-mode"
            ],
            correct: 1,
            rationale: "Il comando 'passive-interface' blocca l'uscita degli annunci di routing e dei messaggi Hello su segmenti in cui non risiedono altri router, incrementando sicurezza ed ottimizzando le risorse di rete."
        },
        {
            question: "Cosa si intende per 'DRouters' nella terminologia delle adiacenze del protocollo OSPF?",
            options: [
                "I router esterni al sistema autonomo.",
                "I router dell'area che non rivestono né il ruolo di DR né quello di BDR.",
                "I router disattivati temporaneamente.",
                "I router preposti al solo instradamento statico."
            ],
            correct: 1,
            rationale: "I DROther mantengono relazioni stabili con il DR e il BDR (stato FULL), mentre tra di loro si fermano allo stato di scambio bidirezionale delle informazioni di base (stato 2-WAY)."
        },
        {
            question: "Quale standard IEEE disciplina il funzionamento e le regole fisiche/logiche delle reti locali wireless (WLAN)?",
            options: [
                "IEEE 802.3",
                "IEEE 802.11",
                "IEEE 802.1Q",
                "IEEE 802.15"
            ],
            correct: 1,
            rationale: "Lo standard IEEE 802.11 definisce le specifiche trasmissive e i protocolli per le comunicazioni wireless (Wi-Fi)."
        },
        {
            question: "Quale banda di frequenza Wi-Fi offre una maggiore penetrazione degli ostacoli fisici (muri) ma risente di un alto livello di congestione dovuto a canali sovrapposti e interferenze di elettrodomestici?",
            options: [
                "Banda a 2.4 GHz",
                "Banda a 5 GHz",
                "Banda a 60 GHz",
                "Banda a 900 MHz"
            ],
            correct: 0,
            rationale: "La banda a 2.4 GHz ha una portata superiore e supera meglio le barriere fisiche, ma dispone di soli 3 canali non sovrapposti (1, 6, 11) ed è affollata da forni a microonde e Bluetooth."
        },
        {
            question: "Nelle reti wireless, che cos'è l'SSID (Service Set Identifier)?",
            options: [
                "La chiave di cifratura principale.",
                "Il nome testuale univoco che identifica pubblicamente una rete Wi-Fi.",
                "L'indirizzo MAC fisico dell'antenna.",
                "Il canale radio di trasmissione."
            ],
            correct: 1,
            rationale: "L'SSID è la stringa alfanumerica (il nome della rete) trasmessa nei beacon frame che gli utenti selezionano sui propri dispositivi per connettersi."
        },
        {
            question: "Quale opzione descrive l'effetto del comando 'switchport trunk allowed vlan 10,20' applicato su un'interfaccia trunk?",
            options: [
                "Rimuove le VLAN 10 e 20 dallo switch.",
                "Limita il transito sul trunk esclusivamente ai frame appartenenti alle VLAN 10 e 20, bloccando tutte le altre.",
                "Assegna la modalità d'accesso alle VLAN selezionate.",
                "Configura la Native VLAN sui parametri indicati."
            ],
            correct: 1,
            rationale: "Questo comando sovrascrive la lista predefinita (che concede il transito a tutte le VLAN da 1 a 4094) permettendo il passaggio solo ai pacchetti delle VLAN specificate per motivi di sicurezza e contenimento del traffico."
        },
        {
            question: "Nel protocollo OSPFv2, in quale stato si trovano due router vicini se hanno completato lo scambio dei pacchetti DBD e possiedono database (LSDB) perfettamente sincronizzati?",
            options: [
                "2-WAY",
                "EXSTART",
                "LOADING",
                "FULL"
            ],
            correct: 3,
            rationale: "Lo stato FULL rappresenta il culmine del processo di adiacenza OSPF: i database dei link-state sono allineati e il router può procedere al calcolo delle rotte ottimali tramite l'algoritmo SPF."
        },
        {
            question: "Quale tipologia di Access Point wireless non richiede un controller WLC centrale per funzionare, contenendo al proprio interno l'intero sistema di gestione dell'interfaccia radio?",
            options: [
                "Lightweight Access Point",
                "Autonomous Access Point (AP Autonomo)",
                "Thin Access Point",
                "Cloud-managed AP con licenza scaduta"
            ],
            correct: 1,
            rationale: "Gli AP autonomi (o fat AP) inglobano in un unico apparato hardware tutte le logiche di autenticazione e configurazione, ideali per piccoli uffici domestici o SOHO."
        },
        {
            question: "Quale comando permette di verificare l'assegnazione e l'integrità logica di tutti gli indirizzi IPv4 impostati sulle porte e sotto-interfacce di un router Cisco, mostrando anche lo stato fisico e del protocollo?",
            options: [
                "show ip route",
                "show ip interface brief",
                "show protocol status",
                "show running-config interfaces"
            ],
            correct: 1,
            rationale: "Il comando 'show ip interface brief' è lo strumento di diagnostica più rapido e immediato per verificare se le interfacce sono attive ('up/up') o spente."
        },
        {
            question: "Quale valore di Distanza Amministrativa (Administrative Distance) viene associato a una sottorete direttamente connessa a un'interfaccia attiva del router?",
            options: [
                "0",
                "1",
                "5",
                "20"
            ],
            correct: 0,
            rationale: "Le reti direttamente connesse hanno un'AD pari a 0, il massimo grado di affidabilità in assoluto per il sistema operativo Cisco IOS."
        },
        {
            question: "Quale comando permette di forzare uno switch Cisco Catalyst a comportarsi da Root Bridge primario configurando una priorità di valore inferiore rispetto a qualsiasi altro nodo presente?",
            options: [
                "Switch(config)# spanning-tree vlan 1 priority 4096",
                "Switch(config)# spanning-tree vlan 1 root primary",
                "Switch(config)# set stp root bridge",
                "Le risposte A e B sono entrambe valide opzioni operative per raggiungere lo scopo"
            ],
            correct: 3,
            rationale: "Sia l'abbassamento manuale della priorità a 4096 (un multiplo ammesso) sia il comando macro 'root primary' servono a garantire l'elezione a Root Bridge."
        },
        {
            question: "Quale porta o linea fisica deve essere utilizzata per la prima configurazione 'Out-of-Band' (fuori rete) di un apparato Cisco privo di configurazione iniziale?",
            options: [
                "Porta GigabitEthernet 0/0",
                "Porta Console",
                "Linea VTY 0",
                "Interfaccia AUX remota"
            ],
            correct: 1,
            rationale: "La porta Console permette un accesso Out-of-Band diretto tramite terminale seriale, essenziale quando l'apparato è isolato o privo di indirizzo IP."
        },
        {
            question: "Quale combinazione di comandi deve essere eseguita per configurare SSH su uno switch, forzando l'apparato a verificare le credenziali su un database utenti locale?",
            options: [
                "Switch(config-line)# login",
                "Switch(config-line)# login local",
                "Switch(config-line)# no login",
                "Switch(config)# ip local-user"
            ],
            correct: 1,
            rationale: "Il comando 'login local' sulle linee VTY indica al sistema operativo di richiedere sia nome utente che password confrontandoli con i record generati globalmente tramite il comando 'username'."
        },
        {
            question: "Cosa accade se si connette un computer a una porta di uno switch su cui è stata preventivamente attivata la tecnologia Spanning Tree 'PortFast'?",
            options: [
                "La porta si blocca segnalando una violazione di sicurezza.",
                "La porta transita istantaneamente dallo stato di Blocking a quello di Forwarding, saltando le fasi di Listening e Learning.",
                "La porta riduce la propria velocità trasmissiva a 10 Mbps.",
                "Lo switch disattiva le logiche di switching sulla porta."
            ],
            correct: 1,
            rationale: "PortFast permette alle porte collegate a host terminali (PC, stampanti, server) di accedere subito alla rete senza attendere i canonici 30 secondi di transizione STP, prevenendo timeout DHCP."
        },
        {
            question: "Quale modalità della Port Security permette di scartare i frame provenienti da un indirizzo MAC non autorizzato, incrementando il contatore delle violazioni e inviando un avviso Syslog, senza però disattivare la porta fisica?",
            options: [
                "Protect",
                "Restrict",
                "Shutdown",
                "Disable"
            ],
            correct: 1,
            rationale: "La modalità 'restrict' garantisce la sicurezza senza interrompere la connettività degli altri host legittimi sulla porta, tenendo traccia degli attacchi tramite messaggi di log di sistema."
        },
        {
            question: "Quale comando permette di escludere un intervallo specifico di indirizzi IPv4 (es. da 192.168.1.1 a 192.168.1.10) dall'assegnazione automatica del server DHCP locale sul router?",
            options: [
                "Router(config-dhcp)# exclude 192.168.1.1 192.168.1.10",
                "Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10",
                "Router(config)# no dhcp pool assignment 192.168.1.1",
                "Router(config-dhcp)# ip address exclude 192.168.1.1-10"
            ],
            correct: 1,
            rationale: "Il comando 'ip dhcp excluded-address' viene inserito in modalità di configurazione globale (fuori dal pool) e protegge gli indirizzi riservati staticamente (es. gateway, server) da doppie assegnazioni e conflitti IP."
        },
        {
            question: "In OSPFv2, quale pacchetto di cortesia viene inviato periodicamente per scoprire i router adiacenti e mantenere attive le relazioni di vicinato?",
            options: [
                "Link-State Update",
                "Database Description",
                "Hello Packet",
                "Link-State Request"
            ],
            correct: 2,
            rationale: "I pacchetti Hello (inviati di norma ogni 10 secondi su link Ethernet) fungono da meccanismo di keepalive per verificare la presenza e lo stato dei router vicini."
        },
        {
            question: "Quale valore di Router ID viene preferito in assoluto in modo dinamico da un router che esegue OSPFv2, se l'amministratore NON ha configurato un ID statico tramite il comando router-id?",
            options: [
                "L'indirizzo IPv4 attivo più basso su un'interfaccia fisica.",
                "L'indirizzo IPv4 attivo più alto su un'interfaccia logica di Loopback.",
                "L'indirizzo IP del gateway predefinito.",
                "L'indirizzo MAC convertito in esadecimale."
            ],
            correct: 1,
            rationale: "In assenza di configurazione manuale, il router seleziona l'IP attivo più alto tra le sue interfacce logiche di Loopback (in quanto più stabili delle fisiche). Se non vi sono loopback, sceglie l'IP attivo più alto tra le interfacce fisiche."
        },
        {
            question: "Cosa si intende per 'Default Seed Metric' nel contesto della redistribuzione delle rotte tra protocolli diversi?",
            options: [
                "La metrica iniziale assegnata a una rotta quando viene importata all'interno di un protocollo di routing differente.",
                "Il costo massimo raggiungibile da OSPF.",
                "Il numero di hop impostato staticamente.",
                "La distanza amministrativa del routing statico."
            ],
            correct: 0,
            rationale: "Quando si importano rotte esterne (es. da statiche a OSPF), occorre assegnare una metrica iniziale (seed metric) compatibile con le logiche matematiche del protocollo di destinazione."
        },
        {
            question: "Quale comando permette di associare permanentemente l'interfaccia fisica FastEthernet 0/5 di uno switch alla VLAN 20?",
            options: [
                "Switch(config)# interface vlan 20\nSwitch(config-if)# port access f0/5",
                "Switch(config)# interface fastethernet 0/5\nSwitch(config-if)# switchport access vlan 20",
                "Switch(config-if)# switchport mode trunk 20",
                "Switch(config)# vlan 20 port f0/5"
            ],
            correct: 1,
            rationale: "Per configurare una porta d'accesso si entra sull'interfaccia fisica interessata e si impiega la sintassi 'switchport access vlan [ID]'."
        },
        {
            question: "Quale parametro stabilisce se due router che eseguono OSPFv2 possono completare con successo l'elezione delle adiacenze stabilendo una relazione di vicinato?",
            options: [
                "Devono possedere lo stesso Router ID.",
                "Devono concordare sui valori di Hello Interval, Dead Interval e ID dell'Area.",
                "Devono utilizzare lo stesso indirizzo IP di loopback.",
                "Devono avere configurato lo stesso routing statico."
            ],
            correct: 1,
            rationale: "Se i timer (Hello/Dead) o l'ID dell'area non coincidono perfettamente tra le due estremità del link, i router rifiuteranno di formare un'adiacenza OSPF."
        },
        {
            question: "Quale tecnologia wireless permette di trasmettere e gestire connessioni di rete ad altissima velocità sfruttando contemporaneamente le tre bande di frequenza a 2.4 GHz, 5 GHz e 6 GHz?",
            options: [
                "Wi-Fi 5 (802.11ac)",
                "Wi-Fi 6E / Wi-Fi 7 (802.11ax / 802.11be)",
                "Bluetooth Low Energy",
                "WiMAX standard"
            ],
            correct: 1,
            rationale: "Wi-Fi 6E introduce il supporto alla banda dei 6 GHz, poi espanso strutturalmente da Wi-Fi 7 per massimizzare la larghezza dei canali e abbattere la latenza."
        },
        {
            question: "Quale meccanismo di sicurezza wireless richiede l'allestimento di un server RADIUS esterno per gestire l'autenticazione centralizzata degli utenti (WPA2/WPA3 Enterprise)?",
            options: [
                "Pre-Shared Key (PSK)",
                "IEEE 802.1X",
                "WEP Open Authentication",
                "WPS PIN Entry"
            ],
            correct: 1,
            rationale: "La modalità Enterprise sfrutta lo standard 802.1X per inoltrare le richieste di accesso a un server RADIUS centrale, garantendo un'autenticazione nominale e tracciabile per ciascun dipendente."
        },
        {
            question: "Quale comando permette di impostare una stringa di testo personalizzata che compare a schermo prima dell'inserimento delle credenziali di login su un apparato Cisco?",
            options: [
                "Router(config)# message login 'Testo'",
                "Router(config)# banner motd #Testo#",
                "Router(config-line)# welcome text #Testo#",
                "Router# write banner"
            ],
            correct: 1,
            rationale: "Il comando 'banner motd' (Message of the Day) permette di visualizzare avvisi legali o messaggi informativi all'apertura del terminale. Il testo deve essere racchiuso tra caratteri delimitatori (es. #)."
        },
        {
            question: "Quale caratteristica contraddistingue il funzionamento dello Spanning Tree in modalità Rapid PVST+?",
            options: [
                "Esegue un'unica istanza STP per tutti i dispositivi indipendentemente dalle VLAN.",
                "Combina la velocità di convergenza dello standard RSTP (802.1w) con la flessibilità dell'architettura Per-VLAN di Cisco.",
                "Disattiva la protezione BPDU Guard.",
                "Richiede l'uso di linee seriali."
            ],
            correct: 1,
            rationale: "Rapid PVST+ unisce il calcolo rapido delle transizioni di stato di RSTP con la suddivisione logica dei percorsi per singola VLAN tipica di PVST+."
        },
        {
            question: "Quale comando permette di verificare la tabella di binding creata e monitorata attivamente dalla funzione di DHCP Snooping?",
            options: [
                "show ip dhcp snooping binding",
                "show port-security binding",
                "show mac-address-table entries",
                "show dynamic arp table"
            ],
            correct: 0,
            rationale: "Il comando 'show ip dhcp snooping binding' elenca tutte le associazioni valide verificate dallo switch per bloccare tentativi di spoofing o violazioni L2."
        },
        {
            question: "In OSPFv2, quale tipologia di pacchetto viene inviata per richiedere esplicitamente a un vicino maggiori dettagli riguardanti un record LSA specifico non ancora aggiornato nel proprio database?",
            options: [
                "Link-State Advertisement",
                "Link-State Request (LSR)",
                "Database Description",
                "Link-State Acknowledgment"
            ],
            correct: 1,
            rationale: "I pacchetti LSR (Link-State Request) vengono emessi quando un router si accorge (tramite i DBD) che un vicino possiede un record topologico più recente del proprio."
        },
        {
            question: "Quale valore numerico di priorità predefinito possiedono le porte d'accesso Spanning Tree sui dispositivi Cisco Catalyst?",
            options: [
                "32",
                "64",
                "128",
                "256"
            ],
            correct: 2,
            rationale: "La priorità di porta di default è 128. Viene utilizzata come criterio di spare (tie-breaker) per decidere quale porta bloccare in caso di costi identici."
        },
        {
            question: "Quale comando di configurazione globale permette di attivare il protocollo OSPFv2 identificando l'istanza con il numero di processo locale 10?",
            options: [
                "Router(config)# ip ospf 10",
                "Router(config)# router ospf 10",
                "Router(config)# active routing ospf 10",
                "Router# setup ospf process 10"
            ],
            correct: 1,
            rationale: "Il comando corretto è 'router ospf [Process-ID]'. Il numero identificativo del processo ha rilevanza unicamente locale e non deve necessariamente coincidere tra router adiacenti."
        },
        {
            question: "Quale combinazione di comandi permette di pubblicare all'interno del processo OSPF la rete locale 192.168.10.0/24 associandola interamente all'Area 0?",
            options: [
                "Router(config-router)# network 192.168.10.0 255.255.255.0 area 0",
                "Router(config-router)# network 192.168.10.0 0.0.0.255 area 0",
                "Router(config-router)# area 0 network 192.168.10.0",
                "Router(config-if)# ip ospf area 0"
            ],
            correct: 1,
            rationale: "Il comando 'network' richiede l'inserimento della Wildcard Mask (l'inversa della subnet mask, in questo caso 0.0.0.255 per una /24) seguita dalla parola chiave 'area' e dal numero dell'area."
        },
        {
            question: "Quale area logica costituisce la spina dorsale centrale (Backbone Area) obbligatoria a cui tutte le altre aree OSPF secondarie devono connettersi in una topologia Multi-Area?",
            options: [
                "Area 1",
                "Area 0",
                "Area 100",
                "Area ISP"
            ],
            correct: 1,
            rationale: "L'Area 0 è l'area backbone centrale definita dal protocollo OSPF. Tutto il traffico inter-area deve obbligatoriamente transitare dall'Area 0."
        },
        {
            question: "Quale comando permette di visualizzare in modo aggregato i parametri globali del protocollo OSPF, inclusi i timer, il Router ID e il numero di aree attive?",
            options: [
                "show ip ospf",
                "show ip route",
                "show ip ospf database summary",
                "show ip protocols"
            ],
            correct: 0,
            rationale: "Il comando 'show ip ip ospf' mostra una panoramica approfondita delle metriche interne, dello stato del processo, dei timer e delle configurazioni dell'algoritmo SPF."
        },
        {
            question: "Quale comando permette di imporre manualmente una larghezza di banda di riferimento pari a 10 Gbps per il calcolo uniforme del costo delle interfacce OSPF su un router Cisco?",
            options: [
                "Router(config-router)# auto-cost reference-bandwidth 10000",
                "Router(config-router)# auto-cost reference-bandwidth 100000",
                "Router(config-if)# bandwidth 10000000",
                "Router(config)# ospf cost reference 10G"
            ],
            correct: 0,
            rationale: "Il valore di default della reference-bandwidth è $100\\text{ Mbps}$ ($10^8$). Per gestire link moderni a 1 Gbps o 10 Gbps senza errori metrici, si usa 'auto-cost reference-bandwidth 10000' per spostare il riferimento a $10000\\text{ Mbps}$ ($10\\text{ Gbps}$)."
        },
        {
            question: "Nel protocollo OSPF, cosa indica lo stato '2-WAY' stabilito tra due router DROther su un segmento multi-accesso?",
            options: [
                "I database dei router sono falliti e l'adiacenza è persa.",
                "I router hanno verificato la comunicazione bidirezionale tramite i pacchetti Hello, ma non procederanno allo scambio dei database topologici.",
                "I router stanno caricando i pacchetti di update.",
                "L'elezione del DR è bloccata per un errore software."
            ],
            correct: 1,
            rationale: "Tra due router DROther lo stato si ferma legittimamente a 2-WAY. Essi non si scambiano i database dei link-state direttamente, poiché si allineano esclusivamente con il DR e il BDR."
        },
        {
            question: "Quale tipologia di antenna wireless concentra il segnale radio in un'unica direzione focalizzata, massimizzando la distanza di copertura per collegamenti stabili Point-to-Point tra edifici?",
            options: [
                "Antenna Omnidirezionale",
                "Antenna Direzionale (es. Yagi o Parabolica)",
                "Antenna a dipolo standard",
                "Antenna integrata interna"
            ],
            correct: 1,
            rationale: "Le antenne direzionali concentrano la potenza del segnale in un fascio stretto, massimizzando la portata su lunghe distanze rettilinee ed escludendo le interferenze laterali."
        },
// --- CCNA 2: BLOCCO 3 DI 3 (DOMANDE 101-150) ---
        {
            question: "Quale comando permette di verificare se una specifica interfaccia di uno switch Cisco sta operando come Trunk e quali VLAN sono attualmente concesse sul collegamento?",
            options: [
                "show ip interface brief",
                "show interfaces trunk",
                "show vlan summary",
                "show running-config vlan"
            ],
            correct: 1,
            rationale: "Il comando 'show interfaces trunk' mostra in modo pulito lo stato di incapsulamento (802.1Q), la Native VLAN e la lista dettagliata delle VLAN autorizzate a transitare sul collegamento."
        },
        {
            question: "Cosa si intende per 'Native VLAN Mismatch' e quali anomalie provoca all'interno di una rete locale?",
            options: [
                "Un errore nella priorità Spanning Tree che spegne lo switch.",
                "Una configurazione errata in cui le due estremità di un trunk 802.1Q hanno Native VLAN differenti, causando potenziali perdite di frame, loop logici e traffico misindirizzato.",
                "Un difetto hardware dei connettori RJ-45.",
                "Un conflitto tra indirizzi IP statici."
            ],
            correct: 1,
            rationale: "Se le Native VLAN non coincidono sui due lati del trunk, il traffico untagged inviato da una parte verrà erroneamente interpretato come appartenente alla VLAN nativa impostata sul lato ricevente."
        },
        {
            question: "Nel protocollo DHCPv4, quale tipo di messaggio viene inviato dal server per segnalare al client che l'indirizzo IP richiesto non è più disponibile o il lease è scaduto?",
            options: [
                "DHCP Offer",
                "DHCP Nak (Negative Acknowledgment)",
                "DHCP Release",
                "DHCP Decline"
            ],
            correct: 1,
            rationale: "Il server risponde con un DHCP Nak se la configurazione richiesta dal client non è valida o se il pool ha terminato le risorse disponibili, forzando il client a riavviare la procedura DORA."
        },
        {
            question: "Quale meccanismo permette a un host di autoconfigurarsi un indirizzo IPv6 globale (GUA) unico senza l'ausilio di un server DHCPv6, basandosi esclusivamente sui messaggi Router Advertisement (RA)?",
            options: [
                "Stateful DHCPv6",
                "SLAAC (Stateless Address Autoconfiguration)",
                "NAT64",
                "ARP IPv6 Translation"
            ],
            correct: 1,
            rationale: "SLAAC consente agli host di generare il proprio indirizzo IPv6 unendo il prefisso di rete ricevuto nel messaggio RA del router locale con un Interface ID calcolato tramite EUI-64 o generazione casuale."
        },
        {
            question: "Se un messaggio Router Advertisement (RA) viene configurato con il flag M (Managed Address Configuration) impostato a 1, come si comporterà l'host ricevente?",
            options: [
                "Userà solo SLAAC ignorando la rete.",
                "Si rivolgerà obbligatoriamente a un server DHCPv6 'Stateful' per ottenere sia l'indirizzo IPv6 sia tutti gli altri parametri di rete.",
                "Disattiverà l'interfaccia di rete.",
                "Configurerà un indirizzo Link-Local statico."
            ],
            correct: 1,
            rationale: "Il flag M=1 (Managed) segnala agli host che l'indirizzamento è gestito in modalità stateful: gli IP globali vengono distribuiti e tracciati centralmente da un server DHCPv6."
        },
        {
            question: "Quale tipo di rotta statica richiede la specifica contemporanea sia dell'interfaccia di uscita locale sia dell'indirizzo IP del Next-Hop, riducendo i cicli di calcolo della tabella (Recursive Lookup) in reti multi-accesso?",
            options: [
                "Rotta statica ricorsiva",
                "Rotta statica completamente specificata (Fully Specified)",
                "Rotta statica direttamente connessa",
                "Rotta statica flottante"
            ],
            correct: 1,
            rationale: "Una rotta 'Fully Specified' fornisce al router l'esatta interfaccia fisica da usare e l'IP del gateway a cui inviare il frame, eliminando ogni ambiguità logica sui segmenti multi-accesso come Ethernet."
        },
        {
            question: "Quale comando permette di verificare l'elenco completo dei binding (assegnazioni attive) gestiti dal server DHCPv4 configurato localmente su un router Cisco?",
            options: [
                "show ip dhcp binding",
                "show ip dhcp pool status",
                "show dhcp server database",
                "show ip interface dhcp"
            ],
            correct: 0,
            rationale: "Il comando 'show ip dhcp binding' elenca gli indirizzi IP distribuiti ai client associandoli al rispettivo MAC address, al tipo di lease e alla data di scadenza."
        },
        {
            question: "In una topologia Spanning Tree (STP), quale porta viene eletta su ogni switch non-root come percorso a costo minimo complessivo verso il Root Bridge?",
            options: [
                "Designated Port",
                "Root Port",
                "Alternate Port",
                "Backup Port"
            ],
            correct: 1,
            rationale: "Ogni switch che non sia il Root Bridge deve individuare una e una sola Root Port, ossia l'interfaccia fisica che offre il cammino più rapido ed economico verso il Root Bridge."
        },
        {
            question: "Cosa accade a livello logico quando un bundle EtherChannel viene configurato in modalità 'On' su entrambe le estremità del collegamento?",
            options: [
                "Gli switch negoziano i parametri usando LACP.",
                "Il canale viene forzato a diventare attivo immediatamente senza inviare o elaborare alcun pacchetto di negoziazione dinamica (LACP/PAgP).",
                "Spanning Tree disattiva lo switch.",
                "Le porte entrano in modalità err-disabled."
            ],
            correct: 1,
            rationale: "La modalità 'On' disabilita l'autonegoziazione. Se i parametri fisici non coincidono perfettamente a livello hardware, si rischia di innescare loop severi poiché Spanning Tree potrebbe interpretare i link in modo errato."
        },
        {
            question: "Quale comando di diagnostica OSPF permette di visualizzare i parametri interni del protocollo specifici per una determinata interfaccia, inclusi l'intervallo Hello, l'intervallo Dead e il ruolo DR/BDR della porta?",
            options: [
                "show ip ospf interface",
                "show ip ospf neighbor",
                "show ip ospf database",
                "show ip protocols ospf"
            ],
            correct: 0,
            rationale: "Il comando 'show ip ospf interface [nome_interfaccia]' isola le informazioni di strato OSPF legate al singolo link, mostrando anche lo stato dell'adiacenza e il costo metrico."
        },
        {
            question: "Che cosa si intende per 'Black Hole Route' nel networking aziendale?",
            options: [
                "Un loop di routing tra due provider esterni.",
                "Una rotta statica configurata verso l'interfaccia logica Null0, utilizzata per scartare intenzionalmente i pacchetti destinati a un intervallo di IP non valido o sotto attacco.",
                "Una porta di rete spenta fisicamente.",
                "Un errore nella tabella CAM dello switch."
            ],
            correct: 1,
            rationale: "Puntando una rotta verso l'interfaccia virtuale Null0, il router distrugge immediatamente i pacchetti corrispondenti senza generare traffico di ritorno, ottimizzando la sicurezza contro flussi malevoli."
        },
        {
            question: "Quale porta UDP viene impiegata di default dal protocollo CAPWAP per gestire lo scambio dei soli dati di controllo (Control Traffic) tra un Access Point leggero e un WLC?",
            options: [
                "Porta UDP 5246",
                "Porta UDP 5247",
                "Porta UDP 161",
                "Porta UDP 67"
            ],
            correct: 0,
            rationale: "CAPWAP separa i flussi: utilizza la porta UDP 5246 per i messaggi di controllo (configurazione e management) e la porta UDP 5247 per incapsulare il traffico dati degli utenti wireless."
        },
        {
            question: "In una WLAN protetta da WPA2 Personal, quale algoritmo di crittografia simmetrica viene sfruttato per garantire la massima riservatezza dei dati trasmessi via radio?",
            options: [
                "DES",
                "AES (Advanced Encryption Standard) accoppiato a CCMP",
                "TKIP legacy",
                "MD5 hashing"
            ],
            correct: 1,
            rationale: "WPA2 adotta l'algoritmo AES con protocollo CCMP per rimpiazzare le debolezze strutturali del vecchio standard WEP e del protocollo TKIP."
        },
        {
            question: "Quale comando permette di verificare l'avvenuta attivazione del DHCP Snooping su uno switch Cisco Catalyst, mostrando anche le VLAN protette?",
            options: [
                "show ip dhcp snooping",
                "show dhcp safe status",
                "show port-security dhcp",
                "show ip interface brief"
            ],
            correct: 0,
            rationale: "Il comando 'show ip dhcp snooping' mostra se la funzione è attiva a livello globale, quali interfacce sono considerate 'Trusted' e l'elenco delle VLAN su cui è attiva l'ispezione."
        },
        {
            question: "Quale stato della porta viene introdotto in Rapid STP (RSTP) per sostituire lo stato di Blocking dello Spanning Tree tradizionale, mantenendo il blocco del traffico utente ma continuando l'ascolto delle BPDU?",
            options: [
                "Learning",
                "Discarding",
                "Disabled",
                "Alternate"
            ],
            correct: 1,
            rationale: "RSTP semplifica l'architettura fondendo gli stati inattivi (Disabled, Blocking, Listening) in un unico stato macro denominato 'Discarding'."
        },
        {
            question: "Quale tipo di LSA (Link-State Advertisement) in OSPFv2 viene generato da ogni singolo router per annunciare lo stato e il costo dei propri collegamenti diretti all'interno della stessa area (Router LSA)?",
            options: [
                "LSA Tipo 1",
                "LSA Tipo 2",
                "LSA Tipo 3",
                "LSA Tipo 5"
            ],
            correct: 0,
            rationale: "I Router LSA (Tipo 1) sono i mattoni fondamentali di OSPF: descrivono i link diretti del router e si propagano esclusivamente all'interno dei confini dell'area di origine."
        },
        {
            question: "Se un amministratore inserisce il comando 'ip route 0.0.0.0 0.0.0.0 192.168.1.1 50' su un router Cisco, cosa rappresenta il valore numerico finale 50?",
            options: [
                "La metrica di costo OSPF.",
                "La Distanza Amministrativa modificata per trasformare la rotta di default in una rotta flottante (backup).",
                "Il numero massimo di host supportati.",
                "Il timer di validità in secondi."
            ],
            correct: 1,
            rationale: "Specificando un valore finale (es. 50), si sovrascrive la Distanza Amministrativa nativa della rotta statica ($1$). Finché la rotta primaria con AD inferiore rimane attiva, questa rotta da 50 resterà nascosta."
        },
        {
            question: "Quale comando permette di forzare il rilascio immediato dell'indirizzo IP ottenuto via DHCP su una postazione client dotata di sistema operativo Windows?",
            options: [
                "ipconfig /renew",
                "ipconfig /release",
                "netsh interface ip reset",
                "clear ip dhcp lease"
            ],
            correct: 1,
            rationale: "Il comando 'ipconfig /release' invia un messaggio DHCP Release al server, svuotando la configurazione di rete corrente della scheda."
        },
        {
            question: "Cosa accade se una porta d'accesso protetta da Port Security rileva un indirizzo MAC non autorizzato e la modalità di violazione è configurata su 'Protect'?",
            options: [
                "La porta viene spenta ed entra in err-disabled.",
                "La porta scarta silenziosamente i pacchetti dell'host non autorizzato, consentendo il transito a quelli legittimi, senza incrementare i contatori o inviare log.",
                "Lo switch invia un messaggio broadcast a tutta la LAN.",
                "La tabella ARP viene azzerata."
            ],
            correct: 1,
            rationale: "A differenza della modalità 'Restrict', la modalità 'Protect' blocca i frame non validi in modo totalmente silente: non incrementa i contatori di violazione e non genera alcuna notifica Syslog."
        },
        {
            question: "Quale comando permette di attivare l'ispezione Dynamic ARP Inspection (DAI) per la VLAN 10 su uno switch Cisco?",
            options: [
                "Switch(config)# ip arp inspection vlan 10",
                "Switch(config)# dynamic-arp enable 10",
                "Switch(config-if)# switchport arp inspection",
                "Switch(config)# vlan 10 arp-protect"
            ],
            correct: 0,
            rationale: "La configurazione globale 'ip arp inspection vlan [ID]' attiva il controllo di validità dei pacchetti ARP incrociandoli con la tabella di binding del DHCP Snooping."
        },
        {
            question: "Nel protocollo OSPF, quale entità logica definisce un router che possiede interfacce connesse ad aree differenti, fungendo da ponte di collegamento verso la spina dorsale Area 0?",
            options: [
                "DR (Designated Router)",
                "ABR (Area Border Router)",
                "ASBR (Autonomous System Boundary Router)",
                "Internal Router"
            ],
            correct: 1,
            rationale: "Un ABR (Area Border Router) presiede i confini delle aree OSPF, mantenendo un database topologico separato per ogni area a cui partecipa ed eseguendo il riassunto delle rotte inter-area."
        },
        {
            question: "Quale parametro presente nell'header di un pacchetto IPv6 sostituisce funzionalmente il campo TTL (Time to Live) del mondo IPv4 per evitare loop di instradamento infiniti?",
            options: [
                "Hop Limit",
                "Traffic Class",
                "Flow Label",
                "Next Header"
            ],
            correct: 0,
            rationale: "Il campo Hop Limit svolge lo stesso identico compito del TTL: viene decrementato di 1 da ogni router attraversato e causa lo scarto del pacchetto quando raggiunge lo zero."
        },
        {
            question: "Quale tipo di indirizzo IPv6 viene configurato automaticamente su ogni interfaccia attiva non appena viene abilitato il protocollo, operando solo all'interno del proprio segmento locale e iniziando con il prefisso 'fe80::/10'?",
            options: [
                "Global Unicast Address (GUA)",
                "Link-Local Address",
                "Unique Local Address (ULA)",
                "Multicast Address"
            ],
            correct: 1,
            rationale: "Gli indirizzi Link-Local (fe80::) sono obbligatori in IPv6 e servono alle comunicazioni interne allo stesso collegamento (es. per scambiare messaggi OSPF o scoprire il gateway)."
        },
        {
            question: "In una configurazione EtherChannel, cosa succede se lo switch A è impostato in modalità LACP 'Passive' e lo switch B è impostato anch'esso in modalità LACP 'Passive'?",
            options: [
                "Il canale si attiva immediatamente in modalità On.",
                "L'EtherChannel non si stabilisce, poiché entrambi gli switch rimangono in attesa che la controparte avvii la negoziazione.",
                "Si verifica un loop e lo Spanning Tree blocca lo switch.",
                "Il sistema passa automaticamente al protocollo PAgP."
            ],
            correct: 1,
            rationale: "Affinché un canale logico LACP possa formarsi con successo, almeno uno dei due lati deve essere configurato in modalità 'Active' per prendere l'iniziativa e inviare i frame di controllo."
        },
        {
            question: "Quale comando permette di forzare una porta d'accesso abilitata con Spanning Tree PortFast a disattivarsi immediatamente ed entrare in stato 'err-disabled' se riceve un pacchetto BPDU non autorizzato?",
            options: [
                "Switch(config-if)# bpduguard enable",
                "Switch(config-if)# spanning-tree bpduguard enable",
                "Switch(config)# spanning-tree edge security",
                "Switch(config-if)# port-security block-bpdu"
            ],
            correct: 1,
            rationale: "Il comando 'spanning-tree bpduguard enable' protegge l'infrastruttura impedendo che utenti malintenzionati o switch non autorizzati possano collegarsi alle porte d'accesso alterando la topologia STP."
        },
        {
            question: "Nel protocollo DHCPv4, quale messaggio viene inviato in broadcast da un client che ha appena acceso la propria interfaccia di rete alla ricerca di un server disponibile?",
            options: [
                "DHCP Offer",
                "DHCP Discover",
                "DHCP Request",
                "DHCP Ack"
            ],
            correct: 1,
            rationale: "La sequenza DORA si apre con il messaggio di DHCP Discover trasmesso dal client in broadcast ($255.255.255.255$) per individuare i server DHCP attivi in ascolto sulla LAN."
        },
        {
            question: "Quale parametro metrico predefinito viene utilizzato per calcolare il costo di un'interfaccia OSPF se la sua larghezza di banda reale è impostata a 100 Mbps (Fast Ethernet)?",
            options: [
                "1",
                "10",
                "19",
                "100"
            ],
            correct: 0,
            rationale: "Con la reference-bandwidth standard pari a $100\\text{ Mbps}$, la formula $100 / 100$ produce un costo esatto di 1. Questo costituisce un limite per le reti moderne, poiché anche i link a 1 Gbps avranno costo 1 se non si modifica la reference."
        },
        {
            question: "Quale comando di configurazione globale permette di attivare il routing inter-VLAN su uno switch Multi-Layer (Layer 3) abilitando l'inoltro dei pacchetti IP?",
            options: [
                "Switch(config)# switchport routing",
                "Switch(config)# ip routing",
                "Switch(config)# multilayer routing enable",
                "Switch# routing-table on"
            ],
            correct: 1,
            rationale: "Senza digitare il comando globale 'ip routing', uno switch di Layer 3 si comporterà come un comune switch di livello 2, ignorando le capacità di instradamento delle SVI."
        },
        {
            question: "Quale tecnica permette a più host di condividere lo stesso indirizzo IPv6 globale modificando dinamicamente la porta di trasporto, in modo speculare a quanto avviene con il NAT/PAT nel mondo IPv4?",
            options: [
                "SLAAC dynamic allocation",
                "NAT64 o Stateful NAT64",
                "IPv6 non ha bisogno nativo di PAT per preservare gli indirizzi grazie all'enorme spazio disponibile, ma supporta NAT66 per scenari di isolamento specifici",
                "DHCPv6 prefix delegation"
            ],
            correct: 2,
            rationale: "L'enorme spazio di indirizzamento a 128 bit di IPv6 rende obsoleto l'uso del NAT/PAT come strumento di risparmio degli IP pubblici, eliminando la necessità di traduzioni per la connettività globale."
        },
        {
            question: "Cosa accade se colleghiamo due switch Cisco tramite un doppio cavo Ethernet senza aver configurato alcuna istanza Spanning Tree o aggregazione EtherChannel?",
            options: [
                "Gli switch riducono automaticamente la banda.",
                "Si genera un loop di Layer 2 catastrofico, con la proliferazione incontrollata di broadcast (Broadcast Storm) e la saturazione immediata della memoria e delle linee.",
                "Il traffico viene bilanciato equamente a livello hardware.",
                "I pacchetti vengono scartati per la scadenza del campo TTL del frame."
            ],
            correct: 1,
            rationale: "I frame di Layer 2 non possiedono un campo di scadenza come il TTL del livello 3. Senza STP, i frame broadcast gireranno all'infinito tra i due switch duplicandosi e bloccando l'intera LAN in pochi istanti."
        },
        {
            question: "Quale comando permette di esaminare in modo sintetico lo stato operativo del protocollo OSPFv2, mostrando il Router ID e i contatori dei messaggi scambiati?",
            options: [
                "show ip protocols",
                "show ip ospf stats",
                "show ospf summary-accounting",
                "show running-config ospf"
            ],
            correct: 0,
            rationale: "Il comando 'show ip protocols' elenca tutti i protocolli di routing dinamico attivi sul dispositivo, mostrando informazioni cruciali come le reti pubblicate, le distanze amministrative e i Router ID."
        },
        {
            question: "Quale indirizzo multicast IPv6 standard viene impiegato per raggiungere esclusivamente tutti i nodi/host (All Nodes) attivi sul link locale corrente?",
            options: [
                "ff02::1",
                "ff02::2",
                "ff02::5",
                "fe80::1"
            ],
            correct: 0,
            rationale: "L'indirizzo multicast ff02::1 corrisponde funzionalmente al broadcast di rete del mondo IPv4, interpellando ogni dispositivo IPv6 presente sul segmento fisico locale."
        },
        {
            question: "Nel protocollo OSPFv2, quale ruolo assume il router che ottiene il secondo punteggio di priorità o Router ID più elevato durante la fase di negoziazione su un segmento multi-accesso?",
            options: [
                "DR (Designated Router)",
                "BDR (Backup Designated Router)",
                "DROther",
                "ASBR"
            ],
            correct: 1,
            rationale: "Il BDR (Backup Designated Router) monitora passivamente lo stato del DR ed è pronto a subentrare istantaneamente nel ruolo centrale in caso di guasto, evitando interruzioni nei flussi di routing."
        },
        {
            question: "In una configurazione di routing statico, che cos'è una rotta statica 'flottante' (Floating Static Route)?",
            options: [
                "Una rotta dinamica che cambia metrica ogni minuto.",
                "Una rotta statica configurata con una Distanza Amministrativa volutamente superiore rispetto a quella del protocollo di routing principale, agendo esclusivamente come percorso di riserva.",
                "Una rotta destinata al traffico multicast.",
                "Una rotta associata a interfacce wireless instabili."
            ],
            correct: 1,
            rationale: "Le rotte flottanti rimangono escluse dalla tabella di instradamento attiva finché il percorso primario (statico o dinamico) è operativo. Entrano in funzione solo se il link principale cade."
        },
        {
            question: "Quale comando permette di visualizzare i dettagli hardware e le statistiche cumulative sugli errori di ricezione (CRC, collisioni, runt frames) relativi all'interfaccia FastEthernet 0/1?",
            options: [
                "show ip interface fastethernet 0/1",
                "show interfaces fastethernet 0/1",
                "show status interface f0/1",
                "show hardware errors f0/1"
            ],
            correct: 1,
            rationale: "Il comando 'show interfaces [nome_interfaccia]' fornisce i contatori dettagliati dello strato fisico e data-link, fondamentali per individuare problemi di cablaggio o disallineamenti di duplex."
        },
        {
            question: "Quale tipologia di architettura wireless (WLAN) prevede l'adozione di Access Point leggeri (LAP) il cui traffico dati viene interamente veicolato e scaricato presso un controller centralizzato WLC?",
            options: [
                "Architettura autonoma (Distributed APs)",
                "Architettura centralizzata basata su controller (Split-MAC architecture)",
                "Rete wireless ad-hoc (IBSS)",
                "Sistemi a ripetitori passivi"
            ],
            correct: 1,
            rationale: "Nell'architettura Split-MAC, le funzioni dello strato 802.11 vengono divise tra l'AP leggero (che gestisce l'hardware radio) e il WLC centrale (che controlla autenticazione e logiche di rete)."
        },
        {
            question: "Cosa indica l'acronimo PoE (Power over Ethernet) all'interno degli standard di cablaggio di rete strutturato?",
            options: [
                "La compressione dei dati nei cavi in fibra.",
                "Una tecnologia (standard IEEE 802.3af/at/bt) che permette di trasmettere l'alimentazione elettrica ai dispositivi di rete (IP phone, AP, telecamere) direttamente tramite il cavo in rame UTP.",
                "Un sistema di crittografia per i dati in transito sullo switch.",
                "L'ottimizzazione del risparmio energetico dei server."
            ],
            correct: 1,
            rationale: "PoE elimina la necessità di installare alimentatori locali e prese di corrente vicine ai dispositivi terminali, sfruttando i conduttori liberi o sovrapposti del cavo di rete Ethernet."
        },
        {
            question: "Quale comando permette di rimuovere un'interfaccia fisica specifica (es. GigabitEthernet 0/1) da un gruppo EtherChannel precedentemente configurato?",
            options: [
                "Switch(config-if)# no channel-group",
                "Switch(config-if)# remove etherchannel 1",
                "Switch(config)# delete channel-group 1 interface g0/1",
                "Switch(config-if)# channel-group protocol none"
            ],
            correct: 0,
            rationale: "Entrando nell'interfaccia fisica interessata, l'anteposizione del comando 'no channel-group' scollega la porta dalle logiche del bundle logico (Port-Channel) di riferimento."
        },
        {
            question: "Quale messaggio del protocollo ICMPv6 viene impiegato da un host per sollecitare i router locali a inviare un annuncio pubblicitario (Router Advertisement) senza attendere la scadenza del timer periodico?",
            options: [
                "Neighbor Solicitation (NS)",
                "Router Solicitation (RS)",
                "Echo Request",
                "Destination Unreachable"
            ],
            correct: 1,
            rationale: "I messaggi RS (Router Solicitation) vengono emessi in multicast dagli host all'avvio per richiedere un invio immediato dei parametri di rete da parte dei router attivi."
        },
        {
            question: "Se configuriamo la Port Security su una porta impostandola con il limite massimo di 2 indirizzi MAC appresi tramite modalità 'Sticky', dove verranno salvati tali indirizzi?",
            options: [
                "Esclusivamente nella RAM dinamica (tabella CAM).",
                "Vengono aggiunti automaticamente alla running-configuration e rimangono persistenti se l'amministratore salva la configurazione nella NVRAM.",
                "In un server DHCP esterno.",
                "Nel registro di boot del dispositivo."
            ],
            correct: 1,
            rationale: "La funzione 'sticky' scrive i MAC appresi direttamente nel file di configurazione corrente (running-config). Salvando con un 'copy run start', tali associazioni diventeranno permanenti anche dopo un riavvio."
        },
        {
            question: "Quale tipo di rotta statica viene utilizzata per instradare i pacchetti verso reti esterne sconosciute impostando come destinazione logica il valore 0.0.0.0/0?",
            options: [
                "Rotta statica di host",
                "Rotta statica di default (Gateway of Last Resort)",
                "Rotta statica riassuntiva",
                "Rotta flottante"
            ],
            correct: 1,
            rationale: "La rotta di default ($0.0.0.0\\ 0.0.0.0$ o $/0$) raccoglie e instrada qualsiasi pacchetto che non trova corrispondenze più specifiche all'interno della tabella di routing."
        },
        {
            question: "Quale comando permette di escludere un intervallo di indirizzi IP da un pool DHCPv4 locale per evitare conflitti con dispositivi configurati staticamente?",
            options: [
                "Router(config-dhcp)# ip dhcp excluded-address 10.0.0.1 10.0.0.10",
                "Router(config)# ip dhcp excluded-address 10.0.0.1 10.0.0.10",
                "Router(config-dhcp)# exclude-ip 10.0.0.1-10",
                "Router(config)# dhcp reservation remove 10.0.0.1"
            ],
            correct: 1,
            rationale: "Il comando 'ip dhcp excluded-address' deve essere inserito in modalità di configurazione globale (non all'interno del sotto-menu del pool) prima della creazione del pool stesso."
        },
        {
            question: "Quale valore di priorità predefinito possiede un'interfaccia di un router all'interno del protocollo OSPFv2 per determinare l'elezione di DR e BDR?",
            options: [
                "0",
                "1",
                "128",
                "255"
            ],
            correct: 1,
            rationale: "La priorità di interfaccia standard è pari a 1. Se si desidera impedire l'elezione di un determinato router per motivi di performance, si imposta tale valore a 0."
        },
        {
            question: "Nel contesto della mitigazione degli attacchi informatici, quale funzionalità permette di proteggere i canali dello switch bloccando l'accesso a frame non autorizzati tramite il monitoraggio della tabella dei binding del DHCP Snooping?",
            options: [
                "IP Source Guard (IPSG)",
                "BPDU Filter",
                "Root Guard",
                "PortFast"
            ],
            correct: 0,
            rationale: "IP Source Guard (IPSG) analizza l'IP e il MAC sorgente dei pacchetti in transito sulle porte non fidate, scartando il traffico se i parametri non coincidono con i record validati nel database del DHCP Snooping."
        },
        {
            question: "Quale comando permette di visualizzare in modo specifico la configurazione e lo stato del protocollo Spanning Tree per una singola VLAN (es. la VLAN 10)?",
            options: [
                "show spanning-tree vlan 10",
                "show vlan 10 stp status",
                "show ip stp interface vlan 10",
                "show active-spanning tree"
            ],
            correct: 0,
            rationale: "Il comando 'show spanning-tree vlan [ID]' isola le metriche di calcolo STP relative alla sola istanza della VLAN specificata, mostrando il Root Bridge, i costi e lo stato delle singole porte."
        },
        {
            question: "Cosa si intende per 'Multidrop' o 'Shared Media' nel networking?",
            options: [
                "Un collegamento in fibra ottica ad alta velocità.",
                "Un mezzo trasmissivo condiviso (come nei vecchi Hub o reti coassiali) in cui più dispositivi competono per l'accesso allo stesso canale fisico, richiedendo logiche di controllo delle collisioni.",
                "Un sistema di memorizzazione cloud.",
                "Un'infrastruttura di routing inter-area."
            ],
            correct: 1,
            rationale: "I supporti condivisi (Shared Media) lavorano in modalità Half-Duplex e necessitano di protocolli come CSMA/CD per rilevare le collisioni e coordinare le trasmissioni dei nodi."
        },
        {
            question: "Quale comando permette di verificare la tabella di instradamento IPv6 completa su un router Cisco?",
            options: [
                "show ip route ipv6",
                "show ipv6 route",
                "show route v6",
                "show protocols ipv6 routing"
            ],
            correct: 1,
            rationale: "Il comando 'show ipv6 route' analizza e mostra a schermo l'architettura dei percorsi statici, dinamici (OSPFv3) e delle reti connesse per il protocollo IPv6."
        },
        {
            question: "In una topologia OSPFv2, quale comando permette di propagare la rotta di default configurata sul router verso tutti gli altri router adiacenti della rete?",
            options: [
                "Router(config-router)# default-information originate",
                "Router(config-router)# redistribute static default",
                "Router(config)# ip ospf default-route forward",
                "Router(config-if)# ip ospf area 0 default"
            ],
            correct: 0,
            rationale: "Il comando 'default-information originate' forza il router a generare un LSA di tipo esterno per pubblicare la propria rotta di default ($0.0.0.0/0$) all'interno dell'intero dominio OSPF."
        },
        {
            question: "Quale comando permette di definire il nome di un dominio DNS locale su un router Cisco, parametro obbligatorio prima della generazione delle chiavi crittografiche RSA per il protocollo SSH?",
            options: [
                "Router(config)# ip domain-name corporate.local",
                "Router(config)# dns-domain set corporate.local",
                "Router(config-line)# domain-lookup corporate.local",
                "Router# set domain corporate.local"
            ],
            correct: 0,
            rationale: "Il comando globale 'ip domain-name [nome_dominio]' definisce il suffisso DNS del dispositivo. Insieme all'hostname, costituisce il nome univoco richiesto dall'algoritmo di cifratura delle chiavi di sicurezza SSH."
        },
        {
            question: "Quale campo viene inserito nel trailer di un frame Ethernet per consentire al dispositivo ricevente di verificare l'assenza di corruzione dei bit tramite il calcolo del codice di controllo ciclico (CRC)?",
            options: [
                "Preamble",
                "FCS (Frame Check Sequence)",
                "Type Field",
                "Length Field"
            ],
            correct: 1,
            rationale: "L'FCS (Frame Check Sequence) contiene il valore risultante dal calcolo matematico eseguito sull'intero contenuto del frame; se il calcolo del destinatario non coincide, il frame viene scartato."
        },
rationale: "L'FCS (Frame Check Sequence) contiene il valore risultante dal calcolo matematico eseguito sull'intero contenuto del frame; se il calcolo del destinatario non coincide, il frame viene scartato."
    }
]; // <--- ASSICURATI DI CHIUDERE L'ARRAY COSÌ ALLA FINE DI TUTTO IL FILE




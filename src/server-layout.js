// Stable keys let /criar rebrand existing resources and replace deleted IDs safely.
// Member and admin must remain first: provisioning uses them for access.
export const rankRoles=[
 ['member','⚔️','Juramentado'],['admin','🛡️','Conselho'],['leader','👑','Líder'],['subleader','⚜️','Sub líder'],['high','✦','High member'],['moderator','🔰','Moderador'],['recruiter','📋','Examinador'],['ally','🤝','Guilda aliada'],['veteran','⭐','Veterano'],['rookie','🌱','Iniciado'],
 ['pvp','⚔️','Chime • PvP'],['pve','🌊','Depths • PvE'],['builder','🔨','Artífice de builds'],['navigator','🧭','Explorador']
];
export const categories=[
 ['entry','PORTAL','🚪','public','ENTRADA'],['info','ARQUIVOS DA GUILDA','📜','public'],['internal','FOGUEIRA','🔥','members','DIVISÃO'],['operations','EXPEDIÇÕES','⚔️','members'],['training','CHIME E TRYOUTS','🎯','members'],['builds','ARSENAL E BUILDS','🔨','members'],['depths','THE DEPTHS','🌊','members'],['voice','VOZES DA GUILDA','🎙️','members'],['staff','CONSELHO','🛡️','staff','EQUIPE'],['tickets-category','ATENDIMENTOS','🎫','staff','ATENDIMENTOS'],['tryouts-category','TRYOUTS PRIVADOS','⚔️','staff']
];
// key, title, emoji, parent key, scope. Read-only channels allow bot/council messages.
export const textChannels=[
 ['verification','solicitar-tryout','⚔️','entry','public'],['tickets','abrir-ticket','🎫','entry','public'],['welcome','chegadas','👋','entry','public'],['rules','codigo-da-guilda','📖','entry','public'],['guide','como-entrar','🪪','entry','public'],
 ['news','avisos','📢','info','public'],['hierarchy','hierarquia','👑','info','readonly'],['alliances','diplomacia','🤝','info','readonly'],['guild-events','eventos-da-guilda','🗓️','info','readonly'],
 ['general','fogueira','💬','internal','members'],['introductions','juramentos','👤','internal','members'],['media','galeria','📸','internal','members'],['clips','highlights','🎬','internal','members'],['suggestions','sugestoes','💡','internal','members'],['looking-for-group','procurar-grupo','👥','internal','members'],
 ['wanted','alvos-da-guilda','🎯','operations','readonly'],['reports','denuncias','🚨','operations','readonly'],['missions','missoes','📌','operations','readonly'],['operations-chat','planejamento','🗺️','operations','members'],['boss-runs','boss-runs','🐉','operations','members'],
 ['training-schedule','agenda-de-treinos','📅','training','readonly'],['training-chat','sparring','⚔️','training','members'],['training-results','resultados','🏆','training','readonly'],['chime','chime-of-conflict','🥇','training','members'],['combat-guides','guias-de-combate','📚','training','members'],
 ['build-sharing','compartilhar-builds','🔨','builds','members'],['oaths','oaths-e-talentos','✦','builds','members'],['equipment','armas-e-equipamentos','🗡️','builds','members'],['progression','progressao','📈','builds','members'],
 ['depths-runs','expedicoes-depths','🌊','depths','members'],['layer-two','layer-2','🌀','depths','members'],['depths-rescue','pedir-resgate','🛟','depths','members'],
 ['staff-text','conselho-hb','🛡️','staff','staff'],['recruitment','avaliacao-de-tryouts','📋','staff','staff'],['analysis','analise-denuncias','🔎','staff','staff'],['staff-records','registros','🗃️','staff','staff']
];
export const voiceChannels=[
 ['voice1','Fogueira 1','🔊','voice','members'],['voice2','Fogueira 2','🔊','voice','members'],['voice-training','Sparring e Chime','⚔️','voice','members'],['voice-operations','Expedição','🧭','voice','members'],['voice-depths','The Depths','🌊','voice','members'],['voice-layer-two','Layer 2','🌀','voice','members'],['voice-staff','Conselho da guilda','🛡️','staff','staff'],['voice-interview','Avaliação de tryout','📋','staff','staff']
];

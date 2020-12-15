import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import sepia_piano from '../img/sepia_piano.jpg'
import dirty_piano from '../img/dirty_piano.jpg'
import harpsichord from '../img/harpsichord.jpg'
import music_sheet from '../img/music_sheet.jpg'
import wing_piano from '../img/wing_piano.jpg'
import child_hand_piano from '../img/child_hand_piano.jpg'
import teacher_student from '../img/teacher_student_piano.jpg'
import construction_piano from '../img/construction_piano.jpg'
import hands_on_piano from '../img/hands_on_piano.jpg'
import coffee from '../img/coffee.jpg'
import headphones from '../img/headphones.jpg'
import piano_concert from '../img/piano_concert.jpg'
import piano_old_hands from '../img/piano_old_hands.jpg'
import record_player from '../img/record_player.jpg'
import QuoteImage from './QuoteImage'
import TextBox from './TextBox'
import Tarifs from './Tarifs'

export default class MainGridText extends Component {
	render() {
		return (
			<Grid stackable columns={2}>
				<Grid.Row style={{paddingBottom: '0'}}>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={teacher_student} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Qui suis-je ?" paragraphBox={<div><p class="paragraphBox">Je me définis comme celle qui vous présente tous les outils qu’il vous faudra manier pour jouer de votre instrument 
						comme vous le souhaitez (clavecin ou piano). Au fil de mon apprentissage musical, j’ai exploré plusieurs sentiers, je me suis appropriée de nombreuses techniques. 
						Mon expérience d’enseignement m’a permis de nourrir ma palette et surtout de considérablement gagner en efficacité. Toutes ces années de pratique, 
						m’ont surtout permise d’acquérir une riche connaissance des répertoires sans jamais tarir 
						ma curiosité naturelle pour explorer de nouveaux horizons artistiques.</p>
						<p class="paragraphBox">Je suis née et j’ai grandi au Québec où j’ai suivi un enseignement musical très complet en interprétation, musicologie et écriture 
							musicale au sein des Conservatoires du Québec, puis à l’Université de Montréal et à Concordia University à Montréal. 
							Installée dans le sud de la France depuis 1992, j’ai poursuivi ma formation musicale au Conservatoire de Boulogne-Billancourt 
							où j’ai obtenu des Prix de clavecin et de basse-continue. J’ai également enrichi ma formation auprès de nombreux 
							professionnels et grands artistes en participant à des stages et masterclass. Claveciniste concertiste en solo et en ensemble, 
							j’ai également fait de belles rencontres musicales qui ont contribué à nourrir, préciser et affiner ma compréhension du jeu musical.</p> 
						<p class="paragraphBox">J’enseigne le piano depuis plus de 30 ans et le clavecin et la basse-continue depuis plus de 25 ans. Après avoir beaucoup travaillé 
							pendant plusieurs années en école de musique, j’ai fait le choix depuis maintenant 15 ans d’exercer en libéral.</p>
						<p class="paragraphBox">Etant par ailleurs bilingue français-anglais, il me sera aisé de vous proposer les cours dans l’une ou l’autre langue.</p></div>}>
						</TextBox>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
				<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Ma pedagogie" paragraphBox={<div><p class="paragraphBox">Je vous propose un enseignement musical personnalisé et complet. 
						Le solfège est immédiatement appliqué à l’apprentissage instrumental. 
						Vous apprenez à jouer et à lire simplement, avec de véritables morceaux dès les premières leçons. Tous les répertoires sont accessibles et peuvent être abordés. </p>
						<p class="paragraphBox">Cours particuliers de musique car tous les élèves sont singuliers et qu’il n’y a pas la voie royale d’un apprentissage 
						un peu suranné et surtout très formaté. L’expression musicale est par définition intime et aussi personnelle et diverse que le timbre de la voix. 
						Il n’y a donc pas un chemin mais quantités de pistes, de voyages, de parcours pour que chaque élève quelque soit son âge, son histoire, 
						sa morphologie puisse exprimer naturellement sa créativité musicale.</p> 
						<p class="paragraphBox">Mon credo : pour chaque élève, m’appuyer sur ses aptitudes naturelles 
						(et oui, tous les élèves en ont), pour construire patiemment 
						et solidement les outils techniques qui serviront son imaginaire musical.</p>
						<p class="paragraphBox">Le mot « solfège » vous donne déjà des boutons et l’envie de fuir très loin ? Je comprends, j’éprouvais la même chose
						 à une époque puis j’ai appris à en faire mon miel. Dans ma pratique, le solfège est complètement intégré et immédiatement appliqué aux
						  acquisitions instrumentales. Savoir bien lire un texte musical, c’est indispensable mais ça ne se construit pas 
						  en égrenant d’ennuyeux cahiers de lecture de notes. Dans mes cours, la lecture d’un texte ne se limite pas 
						  à l’identification note à note mais à une compréhension bien plus globale qui va nourrir le geste musical.</p>
						  <p class="paragraphBox">J’attache également une grande importance au respect de la morphologie de chacun. Je ne pense pas qu’il 
						  soit souhaitable de modeler la main pour qu’elle ressemble davantage à un illusoire idéal pianistique mais qu’il est infiniment 
						  plus intéressant d’adapter les méthodes et les approches en fonction de la morphologie singulière de chacun dans le respect 
						  des équilibres posturaux et musculaires </p>
						  </div>}>
						</TextBox>
					</Grid.Column>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={child_hand_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>	
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={sepia_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Cours en presentiel" paragraphBox={<div><p class="paragraphBox">Les cours particuliers ont lieu dans un espace spécifiquement 
						aménagé au 48 rue Floréal à Montpellier.</p>
						<p class="paragraphBox">Pour le clavecin je dispose de deux instruments fabriqués à Montpellier par Clavecins Martine Argelliès. L’un très polyvalent, 
						d’après un instrument Ruckers ravallé par Taskin, dispose d’une étendue de 5 octaves (61 notes FA-FA), de deux claviers totalement dissociables 
						(pour la musique contemporaine), jeu de luth et 4 pieds, double-transposition 392/415/440 Hz. L’autre clavecin d’après Giusti, 
						pour le répertoire plus ancien, étendue 4 octaves (45 notes Do-Do3 avec octave courte sur le grave), deux jeux de 8’ indépendants, 
						double transposition 415/440/466 Hz.</p> 
						<p class="paragraphBox">Pour le piano, je dispose d'un piano à queue Erard de 1936, étendue complète (88 notes), 
						instrument entretenu par Régis Pain, facteur de piano à Montpellier, mécanique entièrement restaurée récemment.</p>
						</div>}>
						</TextBox>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
				<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Cours en ligne" paragraphBox={<div><p class="paragraphBox">Je me définis comme celle qui vous présente tous les outils qu’il vous faudra manier pour jouer de votre instrument 
						comme vous le souhaitez (clavecin ou piano). Au fil de mon apprentissage musical, j’ai exploré plusieurs sentiers, je me suis appropriée de nombreuses techniques. 
						Mon expérience d’enseignement m’a permis de nourrir ma palette et surtout de considérablement gagner en efficacité. Toutes ces années de pratique, 
						m’ont surtout permise d’acquérir une riche connaissance des répertoires sans jamais tarir 
						ma curiosité naturelle pour explorer de nouveaux horizons artistiques.</p>
						<p class="paragraphBox">Je suis née et j’ai grandi au Québec où j’ai suivi un enseignement musical très complet en interprétation, musicologie et écriture 
							musicale au sein des Conservatoires du Québec, puis à l’Université de Montréal et à Concordia University à Montréal. 
							Installée dans le sud de la France depuis 1992, j’ai poursuivi ma formation musicale au Conservatoire de Boulogne-Billancourt 
							où j’ai obtenu des Prix de clavecin et de basse-continue. J’ai également enrichi ma formation auprès de nombreux 
							professionnels et grands artistes en participant à des stages et masterclass. Claveciniste concertiste en solo et en ensemble, 
							j’ai également fait de belles rencontres musicales qui ont contribué à nourrir, préciser et affiner ma compréhension du jeu musical.</p> 
						<p class="paragraphBox">J’enseigne le piano depuis plus de 30 ans et le clavecin et la basse-continue depuis plus de 25 ans. Après avoir beaucoup travaillé 
							pendant plusieurs années en école de musique, j’ai fait le choix depuis maintenant 15 ans d’exercer en libéral.</p>
						<p class="paragraphBox">Etant par ailleurs bilingue français-anglais, il me sera aisé de vous proposer les cours dans l’une ou l’autre langue.</p></div>}></TextBox>
					</Grid.Column>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={music_sheet} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>	
					</Grid.Column>
				</Grid.Row>
				<Grid.Row style={{paddingBottom: '0', paddingTop: '0'}}>
					<Grid.Column style={{ padding: '0', background: 'black'}}>
						<QuoteImage backgroundImg={wing_piano} quoteText="A nice quote from someone that's long enough to fit 2 lines" author="Anonymous Author"/>
					</Grid.Column>
					<Grid.Column style={{paddingLeft: '5em', paddingTop: '5em', paddingRight: '5em', paddingBottom: '5em'}}>
						<TextBox titleBox="Tarifs" paragraphBox={<div><p class="paragraphBox">Que ce soit en raison d’un éloignement important ou en raison des restrictions sanitaires, 
						il est désormais possible de prendre ses cours en distanciel.</p>
						<p class="paragraphBox">Je suis née et j’ai grandi au Québec où j’ai suivi un enseignement musical très complet en interprétation, musicologie et écriture 
							musicale au sein des Conservatoires du Québec, puis à l’Université de Montréal et à Concordia University à Montréal. 
							Installée dans le sud de la France depuis 1992, j’ai poursuivi ma formation musicale au Conservatoire de Boulogne-Billancourt 
							où j’ai obtenu des Prix de clavecin et de basse-continue. J’ai également enrichi ma formation auprès de nombreux 
							professionnels et grands artistes en participant à des stages et masterclass. Claveciniste concertiste en solo et en ensemble, 
							j’ai également fait de belles rencontres musicales qui ont contribué à nourrir, préciser et affiner ma compréhension du jeu musical.</p> 
						<p class="paragraphBox">J’enseigne le piano depuis plus de 30 ans et le clavecin et la basse-continue depuis plus de 25 ans. Après avoir beaucoup travaillé 
							pendant plusieurs années en école de musique, j’ai fait le choix depuis maintenant 15 ans d’exercer en libéral.</p>
						<p class="paragraphBox">Etant par ailleurs bilingue français-anglais, il me sera aisé de vous proposer les cours dans l’une ou l’autre langue.</p></div>}></TextBox>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row className="tarifs" centered column={1} style={{width: '100vh'}}>
					<Tarifs />
				</Grid.Row>
			</Grid>
		)
	}
}
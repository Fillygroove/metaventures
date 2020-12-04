function generatePage(page) {
	switch (page) {
		case "main":
			document.write(`
			<h1 style="font-family: Ubuntu;">The Wiki</h1>
			
			<hr>

			<p>Welcome to the official Aeroventures Wiki! Here, you can find pages about everything in the Aeroventures world so far.</p>
			
			<h2>Characters</h2>
			<p>
				<a href="index.html?p=aero" class="n">Aero</a></br>
				<a href="index.html?p=archie" class="n">Archie</a></br>
				<a href="index.html?p=lacus" class="n">Lacus</a></br>
				<a href="index.html?p=aposteel" class="n">Aposteel</a></br>
			</p>
			
			<h2>Planets</h2>
			<p>
				<a href="index.html?p=grene" class="n">Grene</a></br>
				<a href="index.html?p=doug" class="n">Doug</a></br>
				<a href="index.html?p=pilf" class="y">Pilf</a></br>
				<a href="index.html?p=ert" class="n">Ert</a></br>
				<a href="index.html?p=george" class="n">George</a></br>
				<a href="index.html?p=dough" class="n">Dough</a></br>
				<a href="index.html?p=mac" class="n">Mac</a></br>
				<a href="index.html?p=aeiou" class="n">Aeiou</a></br>
				<a href="index.html?p=the" class="n">The</a></br>
				<a href="index.html?p=cea" class="n">Cea</a></br>
			</p>
			
			</br>
			</br>
			`);
			break;
		case "pilf":
			document.write(`
			<h1 style="font-family: Ubuntu;">Pilf</h1>
			
			<hr>
			
			<table class="infobox" style="width:22em">
				<caption>Pilf</caption>
				<tbody>
					<tr>
						<td colspan="2" style="text-align:center">
							<img alt="pilf.jpg" src="./images/pilf.png" width="330" height="330">
							<div>
								<a>Pictured in natural color, illustration made by Gramiatar.</a>
							</div>
						</td>
					</tr>
					<tr>
						<th colspan="2" style="">Designations</th>
					</tr>
					<tr>
						<th scope="row" style="max-width:11em;">
							<div style="display:inline-block; padding:0.1em 0;line-height:1.2em;">
								Known Sattelites
							</div>
						</th>
						<td>
							<div class="plainlist">
								<ul>
									<li>
										<span class="nowrap">
											Piffol Rings
										</span>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row" style="max-width:11em;">
							<div style="display:inline-block; padding:0.1em 0;line-height:1.2em;">
								Named by
							</div>
						</th>
						<td>
							<div class="plainlist">
								<ul>
									<li>
										<span class="nowrap">
											Unknown (See <a href="index.html?p=ert" class="n">Flip</a>)
										</span>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row" style="max-width:11em;">
							<div style="display:inline-block; padding:0.1em 0;line-height:1.2em;">
								Classification
							</div>
						</th>
						<td>
							<div class="plainlist">
								<ul>
									<li>
										<span class="nowrap">
											Cuboid Terrestrial Planet
										</span>
									</li>
								</ul>
							</div>
						</td>
					</tr>
					<tr>
						<th scope="row" style="max-width:11em;">
							<div style="display:inline-block; padding:0.1em 0;line-height:1.2em;">
								Life
							</div>
						</th>
						<td>
							<div class="plainlist">
								<ul>
									<li>
										<span class="nowrap">
											Cheese Flies
										</span>
									</li>
								</ul>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			

			<p>Pilf is the fourth planet from the <a href="index.html?p=cold_sun" class="n">Hot Sun</a>. It is the seventh largest in size, after <a href="index.html?p=ert" class="n">Ert</a> and before <a href="index.html?p=doug" class="n">Doug</a>, and is also the seventh most massive planet, after <a href="index.html?p=ert" class="n">Ert</a> and before <a href="index.html?p=george" class="n">George</a>.</p>

				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
				</br>
			`);
			break;
		default: 
			document.write(`
				<h1 style="font-family: Ubuntu;">Oops, a tasty 404!</h1>
				
				<hr>

				<p>This page doesn't seem to exist, sadly... Maybe it was destroyed by World of Pain...</p>

				</br>
				</br>
			`);
	}
}